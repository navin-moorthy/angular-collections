import { Component, OnInit } from "@angular/core";
import { IssueService } from "../issue.service";
import { MatDialog } from "@angular/material";

import { AddIssueComponent } from "./add-issue/add-issues.component";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private issueService: IssueService, private dialog: MatDialog) {}

  issues: any = [];

  ngOnInit() {
    this.issueService.getIssues().subscribe(
      issues => {
        issues.forEach(issue => {
          this.issues.push(issue);
        });
      },
      err => console.log(err)
    );
  }

  openDialog(method) {
    // Add new issue
    if (
      method.target.textContent !== " DELETE " &&
      method.target.textContent !== " UPDATE "
    ) {
      const addIssueDialog = this.dialog.open(AddIssueComponent, {
        width: "100vh"
      });

      addIssueDialog.afterClosed().subscribe(result => {
        console.log(result || "Closed without submitting the issue");
        if (result) {
          this.issues = [];
          this.issueService.getIssues().subscribe(
            issues => {
              issues.forEach(issue => {
                this.issues.push(issue);
              });
            },
            err => console.log(err)
          );
        }
      });
    }

    // Update an issue
    if (method.target.textContent === " UPDATE ") {
      let issueIdUpdate: number;

      if (method.target.className === "mat-button-wrapper") {
        issueIdUpdate = parseInt(
          method.target.parentNode.parentNode.parentNode.parentNode.firstChild
            .firstChild.firstChild.firstChild.textContent,
          10
        );
      } else {
        issueIdUpdate = parseInt(
          method.target.parentNode.parentNode.parentNode.firstChild.firstChild
            .firstChild.firstChild.textContent,
          10
        );
      }

      this.issues.forEach(issue => {
        if (issue.id === issueIdUpdate) {
          const updateIssueDialog = this.dialog.open(UpdateIssueComponent, {
            data: { issue },
            width: "100vh"
          });

          updateIssueDialog.afterClosed().subscribe(result => {
            console.log(result || "Closed without submitting the issue");
            this.issues = [];
            this.issueService.getIssues().subscribe(
              issues => {
                issues.forEach(issue => {
                  this.issues.push(issue);
                });
              },
              err => console.log(err)
            );
          });
        }
      });
    }

    // Delete an issue
    if (method.target.textContent === " DELETE ") {
      let issueIdDelete: number;

      if (method.target.className === "mat-button-wrapper") {
        issueIdDelete = parseInt(
          method.target.parentNode.parentNode.parentNode.parentNode.firstChild
            .firstChild.firstChild.firstChild.textContent,
          10
        );
      } else {
        issueIdDelete = parseInt(
          method.target.parentNode.parentNode.parentNode.firstChild.firstChild
            .firstChild.firstChild.textContent,
          10
        );
      }

      this.issueService.deleteIssue(issueIdDelete).subscribe(
        data => {
          this.issues = [];
          this.issueService.getIssues().subscribe(
            issues => {
              issues.forEach(issue => {
                this.issues.push(issue);
              });
            },
            err => console.log(err)
          );
        },
        error => console.log(error)
      );
    }
  }
}
