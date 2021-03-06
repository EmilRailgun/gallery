import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-div-description',
  templateUrl: './div-description.component.html',
  styleUrls: ['./div-description.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DivDescriptionComponent),
      multi: true,
    },
  ],
})
export class DivDescriptionComponent implements ControlValueAccessor {
  constructor() {}

  descriptionValue: string = 'Write your description here';
  disabled = false;
  onChange: (descriptionValue: any) => void;
  onTouched: () => void;
  isDisabled: boolean;
  onDescriptionChange(e) {
    this.writeValue(e.target.innerText);
    this.onChange(e.target.innerText);
  }
  // Ghi vào value của tag
  writeValue(value: any): void {
    this.descriptionValue = value;
  }
  // Đăng kí với form control khi có thay đổi
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // Đăng kí với angular khi có thao tác
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
