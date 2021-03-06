//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"chango.deprecatedoptimizationpixelv2transaction.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "[DEPRECATED] Optimization Pixel [v2] -  Transaction",
			async: true,
			description: "Chango's optimization pixel is a site-wide data gathering tool used to improve retargeting services. It should fire on every page.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Page Type",
				description: "Page type. Category info about the page the pixel is on (e.g. Homepage, Product page, Cart page)",
				token: "PT_VALUE",
				uv: "universal_variable.page.type"
			}, {
				name: "Cart",
				description: "",
				token: "CART",
				uv: ""
			}, {
				name: "ID",
				description: "",
				token: "ID",
				uv: ""
			}, {
				name: "PUID",
				description: "",
				token: "PUID",
				uv: ""
			}],
		categories:[
			"Re-Targeting"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window.__cho__ = {
				"data": {
					"pt": "" + this.valueForToken("PT_VALUE") + "",
					"crt": "" + this.valueForToken("CART") + "",
					"na": "",
					"op": "",
					"sp": "",
					"sku": "",
					"pc": ""
				},
				"pid": "" + this.valueForToken("ID") + "",
				"puid2": "" + this.valueForToken("PUID") + ""
			};

			var c = document.createElement('script');
			c.type = 'text/javascript';
			c.async = true;
			c.src = document.location.protocol + '//cc.chango.com/static/o.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(c, s);
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
