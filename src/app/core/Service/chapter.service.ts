import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../Model/chapter.model';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private apiUrl = 'http://localhost:8055/items/chapter';

  constructor(private http: HttpClient) {}

  getChapters(): Observable<{data:any[]}> {
    return this.http.get<{data:any[]}>(this.apiUrl);
  }

  addChapter(Chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(this.apiUrl, Chapter);
  }

  updateChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.patch<Chapter>(`${this.apiUrl}/${chapter.id}`, chapter);
  }

  deleteChapter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
 
