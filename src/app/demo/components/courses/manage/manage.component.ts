import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/Model/book.model';
import { BookService } from 'src/app/core/Service/book.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class ManageComponent implements OnInit {

    books: any = [];
    bookDialog: boolean = false;
    viewDialog: boolean = false;
    isEditMode: boolean = false;
    availableClasses: string[] = ['9th', '10th', '11th', '12th'];

    bookForm = {
        id: null,
        name: '',
        description: '',
        class: '9th'
    };

    selectedBook: any = null;
    selectedBooks: any[] = [];
    errors = {
        name: false
    };

    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private bookService: BookService
    ) {}

    ngOnInit() {
        this.loadBooks();
    }

    loadBooks() {
        this.bookService.getBooks().subscribe( (response) =>{
            this.books=response.data;
        }

        );
    }

    openNew() {
        this.isEditMode = false;
        this.bookForm = { id: null, name: '', description: '', class: '9th' };
        this.errors = { name: false };
        this.bookDialog = true;
    }

    editBook(book: any) {
        this.isEditMode = true;
        this.bookForm = { ...book };
        this.errors = { name: false };
        this.bookDialog = true;
    }

    viewBook(book: any) {
        this.selectedBook = book;
        this.viewDialog = true;
    }

    saveBook() {
        this.errors = { name: false };
    
        if (!this.bookForm.name) this.errors.name = true;
    
        if (this.errors.name) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all required fields!' });
            return;
        }
    
        if (this.isEditMode) {
            const index = this.books.findIndex(b => b.id === this.bookForm.id);
            if (index !== -1) {
                this.messageService.add({ severity: 'success', summary: 'Update Successful', detail: 'Book Updated Successfully' });
            }
        } else {
            this.bookForm.id = this.books.length + 1;
            this.messageService.add({ severity: 'success', summary: 'Added', detail: 'Book Added Successfully' });
        }
    
        setTimeout(() => {
            this.bookDialog = false;
        }, 1000);
    }
    deleteBook(book: any) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete "${book.name}"?`,
            header: 'Delete Book',
            icon: 'pi pi-exclamation-triangle text-red',
            accept: () => {
                this.books = this.books.filter(b => b.id !== book.id);
                this.messageService.add({ 
                    severity: 'success', 
                    summary: 'Deleted', 
                    detail: `Book "${book.name}" has been removed.`,
                    icon: 'pi pi-check-circle' 
                });
            }
        });
    }
    

    deleteSelectedBooks() {
        if (this.selectedBooks.length === 0) {
            this.messageService.add({ 
                severity: 'warn', 
                summary: 'No Selection', 
                detail: 'Please select at least one book to delete.' 
            });
            return;
        }
    
        this.confirmationService.confirm({
            message: `Are you sure you want to delete the selected books?`,
            header: 'Delete Books',
            icon: 'pi pi-exclamation-triangle text-red',
            accept: () => {
                this.books = this.books.filter(book => !this.selectedBooks.includes(book));
                this.selectedBooks = [];
                this.messageService.add({ 
                    severity: 'success', 
                    summary: 'Deleted', 
                    detail: 'Selected books have been removed.',
                    icon: 'pi pi-check-circle' 
                });
            }
        });
    }
    

    navigateToChapters(book: any) {
        this.router.navigate(['/courses/manage/add-chapters'], { queryParams: { bookId: book.id } });
    }

    isViewing(): boolean {
        return this.viewDialog && !this.isEditMode;
    }
}


