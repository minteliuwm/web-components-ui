import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'wc-icon'
})
export class Icon {

	/**
	 * Icon 名称
	 */
	@Prop() name: string='';

	render() {
		return (
			<i class={'wc-icon-' + this.name}></i>
		);
	}
}
