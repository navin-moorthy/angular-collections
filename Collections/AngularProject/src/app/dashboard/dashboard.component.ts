import { Component, OnInit } from "@angular/core";
import { IssueService } from "../issue.service";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private issueService: IssueService, private dialog: MatDialog) {}

  issueId: number = null;
  dateCreated: number = null;
  shortDescription: string = null;
  details: string = null;
  severity: string = null;
  status: string = null;

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html"
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
