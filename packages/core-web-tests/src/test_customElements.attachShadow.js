// QUnit.test('customElements.attachShadow', function(assert) {
// 	class TestElementShadow extends HTMLElement {
// 		connectedCallback() {
// 			// Create a shadow root
// 			var shadow = this.attachShadow({ mode: 'open' });

// 			// Create text node and add word count to it
// 			var spacer = document.createElement('div');
// 			spacer.setAttribute('style', 'width: 100px; height: 20px;');
// 			this.setAttribute('style', 'display: inline-block;');

// 			// Append it to the shadow root
// 			shadow.appendChild(spacer);
// 		}
// 	}

// 	customElements.define('test-element-shadow', TestElementShadow);
// 	const fixture = document.getElementById('qunit-fixture');

// 	fixture.innerHTML = '<test-element-shadow></test-element-shadow>';

// 	const el = fixture.querySelector('test-element-shadow');
// 	assert.equal(window.getComputedStyle(el).width, '100px');
// 	assert.equal(window.getComputedStyle(el).height, '20px');
// });
