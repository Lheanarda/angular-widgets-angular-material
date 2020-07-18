import { MatRadioModule } from '@angular/material/radio';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './Typography/Typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { RadioCheckboxComponent } from './radio-checkbox/radio-checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ChipsComponent } from './chips/chips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
   declarations: [
      AppComponent,
      TypographyComponent,
      ButtonsComponent,
      IconComponent,
      BadgeComponent,
      ProgressSpinnerComponent,
      ToolbarComponent,
      SidenavComponent,
      MenuComponent,
      ListComponent,
      GridComponent,
      ExpansionPanelComponent,
      CardComponent,
      TabsComponent,
      StepperComponent,
      InputComponent,
      SelectComponent,
      AutoCompleteComponent,
      RadioCheckboxComponent,
      DatepickerComponent,
      TooltipComponent,
      SnackbarComponent,
      DialogComponent,
      DialogExampleComponent,
      DataTableComponent,
      ChipsComponent,
   ],
   entryComponents: [
      DialogExampleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
