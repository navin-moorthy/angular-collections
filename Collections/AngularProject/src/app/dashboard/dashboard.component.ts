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
  defaultStatusFilter = "all";
  defaultSeverityFilter = "all";
  showHideCustomize = [
    "showDateCreated",
    "showSeverity",
    "showDetails",
    "showResolutionDate",
    "showStatus",
    "showShortDescription"
  ];

  ngOnInit() {
    /**
     * Get the Issues on component Initialization
     */
    this.issueService.getIssues().subscribe(
      issues => {
        issues.forEach(issue => {
          this.issues.push(issue);
        });
      },
      err => console.log(err)
    );
  }

  /**
   * ADD, UPDATE and DELETE Operations
   */

  /**
   * Add new issue
   */
  addIssue() {
    const addIssueDialog = this.dialog.open(AddIssueComponent, {
      width: "100vh"
    });

    /**
     * Open AddIssue Dialog and refresh the issues on submission
     */
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

  /**
   * Update an issue
   */
  updateIssue(event) {
    let issueIdToBeUpdated: number;

    if (event.target.className === "mat-button-wrapper") {
      issueIdToBeUpdated = parseInt(
        event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1]
          .firstChild.firstChild.firstChild.textContent,
        10
      );
    } else {
      issueIdToBeUpdated = parseInt(
        event.target.parentNode.parentNode.parentNode.childNodes[1].firstChild
          .firstChild.firstChild.textContent,
        10
      );
    }

    /**
     * Open UpdateIssue Dialog and refresh the issues on submission
     */
    this.issues.forEach(issue => {
      if (issue.id === issueIdToBeUpdated) {
        const updateIssueDialog = this.dialog.open(UpdateIssueComponent, {
          data: { issue },
          width: "100vh"
        });

        updateIssueDialog.afterClosed().subscribe(result => {
          console.log(result || "Closed without submitting the issue");
          this.issues = [];
          this.issueService.getIssues().subscribe(
            issues => {
              issues.forEach(iss => {
                this.issues.push(iss);
              });
            },
            err => console.log(err)
          );
        });
      }
    });
  }

  /**
   * Delete an issue
   */
  deleteIssue(event) {
    let issueIdToBeDeleted: number;

    if (event.target.className === "mat-button-wrapper") {
      issueIdToBeDeleted = parseInt(
        event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1]
          .firstChild.firstChild.firstChild.textContent,
        10
      );
    } else {
      issueIdToBeDeleted = parseInt(
        event.target.parentNode.parentNode.parentNode.childNodes[1].firstChild
          .firstChild.firstChild.textContent,
        10
      );
    }

    /**
     * Delete the issue and refresh the issues if successfull
     */
    this.issueService.deleteIssue(issueIdToBeDeleted).subscribe(
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
