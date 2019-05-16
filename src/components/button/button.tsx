import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
	tag: 'wc-button',
	styleUrl: 'button.scss'
})
export class Button {

	/**
	 * 风格
	 */
	@Prop() public theme: string = 'default';

	/**
	 * Icon
	 */
	@Prop() public icon: string = '';

	/**
	 * 是否禁用
	 */
	@Prop() public disabled: boolean = false;

	/**
	 * 点击事件
	 */
	@Event() public onClick: EventEmitter;

	public render() {
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
