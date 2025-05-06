import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    providers: [MessageService]
})
export class ManageComponent implements OnInit, OnDestroy {
    @ViewChild('dt') dt: Table;
    courseDialog: boolean = false;
    deleteCourseDialog: boolean = false;
    deleteCoursesDialog: boolean = false;
    viewCourseDialog: boolean = false;

    courses: any[] = [];
    course: any = {};
    selectedCourses: any[] = [];
    books: any = [];

    submitted: boolean = false;
    cols: any[] = [];
    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];
    private apiUrl = 'http://localhost:8055/items/book';
    private socket: WebSocket | null = null;  // 🔹 Yeh property class level par define ki gayi
    private refreshInterval: any;
    products: any;

    constructor(private http: HttpClient, private messageService: MessageService) { }

    ngOnInit() {
        this.getBooks();
        this.setupWebSocket();
        // Status values ko initialize karna
    this.statuses = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' }
    ];
    }

    ngOnDestroy() {
        if (this.socket) {
            this.socket.close();
        }
    }

    getBooks() {
        this.http.get(this.apiUrl).subscribe((res: any) => {
            this.courses = res.data;
        }, (error) => {
            console.error("Error fetching books:", error);
        });
    }

    setupWebSocket() {
        this.socket = new WebSocket("ws://localhost:8055/websocket");

        this.socket.onopen = () => {
            console.log("WebSocket Connected to Directus.");
            this.socket.send(JSON.stringify({
                type: "subscribe",
                collection: "book"
            }));
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "event") {
                console.log("Data Changed in Directus:", data);
                this.getBooks(); // Refresh UI
            }
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };

        this.socket.onclose = () => {
            console.log("WebSocket Closed.");
        };
    }
    openNew() {
        this.course = {};
        this.submitted = false;
        this.courseDialog = true;
    }

    editCourse(course: any) {
        this.course = { ...course };
        this.courseDialog = true;
    }

    deleteCourse(course: any) {
        this.course = { ...course };
        this.deleteCourseDialog = true;
    }

    viewCourse(course: any) {
        this.course = { ...course };
        this.viewCourseDialog = true;
    }

    confirmDelete() {
        this.http.delete(`${this.apiUrl}/${this.course.id}`).subscribe(
            () => {
                this.getBooks(); // Refresh after delete
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Course Deleted', life: 3000 });
                this.deleteCourseDialog = false;
            },
            (error) => {
                console.error("Error deleting course:", error);
            }
        );
    }

    confirmDeleteSelected() {
        const ids = this.selectedCourses.map(c => c.id);
        this.http.post(`${this.apiUrl}/bulk-delete`, { filter: { id: { _in: ids } } }).subscribe(
            () => {
                this.getBooks(); // Refresh after delete
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Courses Deleted', life: 3000 });
                this.selectedCourses = [];
            },
            (error) => {
                console.error("Error deleting courses:", error);
            }
        );
    }

    saveCourse() {
        this.submitted = true;
        if (this.course.name?.trim()) {
            if (this.course.id) {
                this.updateCourse(this.course);
            } else {
                this.addCourse(this.course);
            }
        } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Course name is required!', life: 3000 });
        }
    }

    addCourse(course: any) {
        this.http.post(this.apiUrl, course).subscribe(
            (res: any) => {
                this.getBooks(); // Refresh after add
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Course Created', life: 3000 });
                this.courseDialog = false;
                this.course = {};
            },
            (error) => {
                console.error("Error adding course:", error);
            }
        );
    }

    updateCourse(course: any) {
        this.http.patch(`${this.apiUrl}/${course.id}`, course).subscribe(
            () => {
                this.getBooks(); // Refresh after update
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Course Updated', life: 3000 });
                this.courseDialog = false;
            },
            (error) => {
                console.error("Error updating course:", error);
            }
        );
    }

    hideDialog() {
        this.courseDialog = false;
        this.submitted = false;
    }

    // For Field Popup
    fieldPopupVisible: boolean = false;
    fieldPopupTitle: string = '';
    fieldPopupContent: string = '';

    openFieldPopup(title: string, content: string) {
        this.fieldPopupTitle = title;
        this.fieldPopupContent = content;
        this.fieldPopupVisible = true;
    }

    // Fix for file input trigger
    triggerFileInput() {
        setTimeout(() => {
            const fileInput = document.getElementById('fileInput') as HTMLInputElement;
            if (fileInput) {
                fileInput.click();
            } else {
                console.error("File input not found");
            }
        }, 100);
    }
    

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
