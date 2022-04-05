// import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
// import { MatPaginator } from "@angular/material/paginator";
// import { MatSort } from "@angular/material/sort";
// import { MatTableDataSource } from "@angular/material/table";
// import {Mission} from "../model/launch";
// import {LaunchService} from "../services/launch.service";
// import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
// import {merge, fromEvent} from "rxjs";
// import {LessonsDataSource} from "../services/lessons.datasource";
//
//
// @Component({
//     selector: 'app-view-mission-details',
//     templateUrl: './course.component.html',
//     styleUrls: ['./course.component.css']
// })
// export class CourseComponent implements OnInit, AfterViewInit {
//
//     course:Mission;
//
//     dataSource: LessonsDataSource;
//
//     displayedColumns= ["seqNo", "description", "duration"];
//
//     @ViewChild(MatPaginator) paginator: MatPaginator;
//
//     @ViewChild(MatSort) sort: MatSort;
//
//     @ViewChild('input') input: ElementRef;
//
//     constructor(private route: ActivatedRoute,
//                 private coursesService: LaunchService) {
//
//     }
//
//     ngOnInit() {
//
//         this.course = this.route.snapshot.data["course"];
//
//         this.dataSource = new LessonsDataSource(this.coursesService);
//
//         this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
//     }
//
//     ngAfterViewInit() {
//
//         this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
//
//         fromEvent(this.input.nativeElement,'keyup')
//             .pipe(
//                 debounceTime(150),
//                 distinctUntilChanged(),
//                 tap(() => {
//                     this.paginator.pageIndex = 0;
//
//                     this.loadLessonsPage();
//                 })
//             )
//             .subscribe();
//
//         merge(this.sort.sortChange, this.paginator.page)
//         .pipe(
//             tap(() => this.loadLessonsPage())
//         )
//         .subscribe();
//
//     }
//
//     loadLessonsPage() {
//         this.dataSource.loadLessons(
//             this.course.id,
//             this.input.nativeElement.value,
//             this.sort.direction,
//             this.paginator.pageIndex,
//             this.paginator.pageSize);
//     }
//
//
// }
