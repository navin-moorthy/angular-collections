import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class IssueService {
  constructor(private http: HttpClient) {}

  url = "http://35.154.61.191:8081/issues";

  getIssues() {
    return this.http.get<any>(this.url);
  }

  addIssue(issue) {
    return this.http.post<any>(this.url, issue);
  }

  updateIssue(issue) {
    return this.http.put<any>(this.url + "/" + issue.id, issue);
  }

  deleteIssue(id) {
    return this.http.delete<any>(this.url + "/" + id);
  }
}
