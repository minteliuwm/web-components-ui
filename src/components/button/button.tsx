import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'wc-button',
  styleUrl: 'button.scss'
})
export class Button {

  @Prop() theme: string = 'default';

  @Prop() icon: string = '';

  @Prop() disabled: boolean = false;

  @Event() onClick: EventEmitter;

  render() {
    return (
      <button class={'u-btn btn-' + this.theme} disabled={this.disabled} onClick={this.handleClick.bind(this)}>
        {this.icon ? <i class={'btn-icon icon-' + this.icon} /> : ''}
        <slot></slot>
      </button>
    );
  }

  private handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
