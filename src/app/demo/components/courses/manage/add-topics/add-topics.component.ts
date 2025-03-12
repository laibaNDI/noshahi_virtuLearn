import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-topics',
    templateUrl: './add-topics.component.html',
    styleUrls: ['./add-topics.component.scss'],
    providers: [MessageService]
})
export class AddTopicsComponent implements OnInit {
    topics: any[] = [];
    topicDialog: boolean = false;
    isEditMode: boolean = false;
    chapterId: any;

    topicForm = {
        id: null,
        name: '',
        description: ''
    };

    constructor(
        private messageService: MessageService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.chapterId = params['chapterId'];
            this.loadTopics();
        });
    }

    loadTopics() {
        this.topics = [
            { id: 1, name: 'Introduction', description: 'Basic concepts' },
            { id: 2, name: 'Advanced', description: 'In-depth analysis' }
        ];
    }

    openNew() {
        this.isEditMode = false;
        this.topicForm = { id: null, name: '', description: '' };
        this.topicDialog = true;
    }

    editTopic(topic: any) {
        this.isEditMode = true;
        this.topicForm = { ...topic };
        this.topicDialog = true;
    }

    saveTopic() {
        if (!this.topicForm.name || !this.topicForm.description) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
            return;
        }

        if (this.isEditMode) {
            const index = this.topics.findIndex(t => t.id === this.topicForm.id);
            if (index !== -1) {
                this.topics[index] = { ...this.topicForm };
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Topic Updated' });
            }
        } else {
            this.topicForm.id = this.topics.length + 1;
            this.topics.push({ ...this.topicForm });
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Topic Added' });
        }
        this.topicDialog = false;
    }

    deleteTopic(topic: any) {
        const isConfirmed = confirm(`Are you sure you want to delete "${topic.name}"?`);
        if (isConfirmed) {
            this.topics = this.topics.filter(t => t.id !== topic.id);
            this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: `Topic "${topic.name}" has been removed.` });
        }
    }

    viewTopic(topic: any) {
        this.router.navigate(['/courses/manage/add-subtopics'], { queryParams: { topicId: topic.id } });
    }
}
