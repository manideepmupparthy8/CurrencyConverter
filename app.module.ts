import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// PrimeNG Components for demos
import { AccordionModule } from "primeng/accordion";
import { MessageService } from "primeng/api";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipsModule } from "primeng/chips";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ColorPickerModule } from "primeng/colorpicker";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { FullCalendarModule } from "primeng/fullcalendar";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { StepsModule } from "primeng/steps";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { TabViewModule } from "primeng/tabview";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { VirtualScrollerModule } from "primeng/virtualscroller";

import { AppRoutingModule } from "./app-routing.module";
import { AppBreadcrumbComponent } from "./app.breadcrumb.component";
// Application services
import { BreadcrumbService } from "./app.breadcrumb.service";
// Demo pages
import { AppCodeModule } from "./app.code.component";
// Application Components
import { AppComponent } from "./app.component";
import { AppConfigComponent } from "./app.config.component";
import { AppFooterComponent } from "./app.footer.component";
import { AppMainComponent } from "./app.main.component";
import { AppMenuComponent } from "./app.menu.component";
import { MenuService } from "./app.menu.service";
import { AppMenuitemComponent } from "./app.menuitem.component";
import { AppProfileComponent } from "./app.profile.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppLoginComponent } from "./Components/loginMain/app.login.component";
import { UsermanagementComponent } from "./Components/usermanagement/usermanagement.component";
import { CollegesComponent } from "./Components/colleges/colleges.component";
import { AddcollegesComponent } from "./Components/addcolleges/addcolleges.component";
import { EnrolllistComponent } from "./Components/enrolllist/enrolllist.component";
import { DataService } from "./data.service";
import { CurrencyPipe } from "@angular/common";
import { IndianCurrency } from "./Components/colleges/custom.currencypipe";
import { EuropeanCurrency } from "./Components/colleges/european.currencypipe";
// import { MycurrencyPipe } from "./Components/colleges/european.currencypipe";
// import { PricePipePipe} from "../app/Components/colleges/custom.currencypipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        SelectButtonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule
    ],
    declarations: [
        AppComponent,
        IndianCurrency,
        EuropeanCurrency,
        // MycurrencyPipe,
        // PricePipePipe,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppProfileComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
        AppLoginComponent,
        UsermanagementComponent,
        CollegesComponent,
        AddcollegesComponent,
        EnrolllistComponent,
    ],
    providers: [
        // {provide: LocationStrategy, useClass: HashLocationStrategy},
       MessageService, MenuService, BreadcrumbService, DataService, CurrencyPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
