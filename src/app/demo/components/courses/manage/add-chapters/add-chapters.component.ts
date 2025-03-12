import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-add-chapters',
    templateUrl: './add-chapters.component.html',
    styleUrls: ['./add-chapters.component.scss'],
    providers: [MessageService]
})
export class AddChaptersComponent implements OnInit {

    selectedBook: any = null;
    chapters: any[] = [];
    chapterDialog: boolean = false;
    isEditMode: boolean = false;

    chapterForm = {
        id: null,
        number: '',
        name: '',
        description: ''
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const bookId = params['bookId'];
            this.loadSelectedBook(bookId);
            this.loadChapters(bookId);
        });
    }

    // Load selected book from storage or API
    loadSelectedBook(bookId: number) {
        // Dummy data, ideally fetch from backend
        const allBooks = [
            { id: 1, name: 'Mathematics', description: 'Math concepts', class: '10th' },
            { id: 2, name: 'Science', description: 'Physics & Chemistry', class: '9th' }
        ];
        this.selectedBook = allBooks.find(b => b.id === Number(bookId)) || null;
    }

    // Load chapters (dummy data for now)
    loadChapters(bookId: number) {
        // Dummy data, ideally fetch from backend
        const allChapters = {
            1: [
                { id: 1, number: 1, name: 'Algebra', description: 'Basic algebra concepts' },
                { id: 2, number: 2, name: 'Geometry', description: 'Introduction to geometry' }
            ],
            2: [
                { id: 1, number: 1, name: 'Atoms', description: 'Structure of atoms' },
                { id: 2, number: 2, name: 'Forces', description: 'Newton’s laws' }
            ]
        };
        this.chapters = allChapters[bookId] || [];
    }

    openNew() {
        this.isEditMode = false;
        this.chapterForm = { id: null, number: '', name: '', description: '' };
        this.chapterDialog = true;
    }

    editChapter(chapter: any) {
        this.isEditMode = true;
        this.chapterForm = { ...chapter };
        this.chapterDialog = true;
    }

    saveChapter() {
        if (!this.chapterForm.number || !this.chapterForm.name || !this.chapterForm.description) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
            return;
        }

        if (this.isEditMode) {
            const index = this.chapters.findIndex(c => c.id === this.chapterForm.id);
            if (index !== -1) {
                this.chapters[index] = { ...this.chapterForm };
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Chapter Updated' });
            }
        } else {
            this.chapterForm.id = this.chapters.length + 1;
            this.chapters.push({ ...this.chapterForm });
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Chapter Added' });
        }
        this.chapterDialog = false;
    }

    deleteChapter(chapter: any) {
        const isConfirmed = confirm(`Are you sure you want to delete "${chapter.name}"?`);
        if (isConfirmed) {
            this.chapters = this.chapters.filter(c => c.id !== chapter.id);
            this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: `Chapter "${chapter.name}" has been removed.` });
        }
    }
    viewChapter(chapter: any) {
      this.router.navigate(['/courses/manage/add-topics'], { queryParams: { chapterId: chapter.id } });
    }
    
}
