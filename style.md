/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {margin:0;padding:0;}
table {border-collapse:collapse;border-spacing:0;}
fieldset,img {border:0;}
address,caption,cite,code,dfn,th,var {font-style:normal;font-weight:normal;}
ol,ul {list-style:none;}
caption,th {text-align:left;}
h1,h2,h3,h4,h5,h6 {font-size:100%;font-weight:normal;}
q:before,q:after {content:'';}
abbr,acronym {border:0;}
article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary {display:block;}

html, body { height:100%; }

/* colors

	yellow:#fffa80;

*/

body, a {
	color:#333;
}

body > article > p {
	border-color:#333;
}

/* fonts */

@font-face {
	font-family: 'StandardCT-Bold';
	src: url('/assets/style_156823.eot');
	src: url('/assets/style_156823.eot?#iefix') format('embedded-opentype'),
			 url('/assets/style_156823.woff') format('woff'),
			 url('/assets/style_156823.ttf') format('truetype'),
			 url('/assets/style_156823.svg#StandardCT-Bold') format('svg');
}

body, section.news h2 {
	font-family:'Helvetica Neue',Helvetica,Arial,sans-serf;
	font-weight:normal;
	font-size:16px;
	line-height:1.4;
}

b, strong, h1, h2, body > article > p, a.previous, a.next {
	font-family:'StandardCT-Bold';
	font-weight:normal !important;
}

blockquote p:last-child { /* separated because IE8 does not like this */
	font-family:'StandardCT-Bold';
	font-weight:normal;
}

/* newswordy */

body {
	background:#eee;
}

a {
	text-decoration:none;
}

a:hover, section p a, a.selected {
	opacity:.5;
}

p a:hover {
	opacity:.25;
}

body > header, body > article, body > footer, #pane section {
	max-width:1400px;
	margin:0 auto;
}

body > header {
	font-size:24px;
	position:relative;
	padding:20px;
	max-width:1360px; /* compensate for padding */
}

body > header, body > header a {
	color:rgba(51,51,51,.5);
}

body > header > nav {
	position:absolute;
	right:20px;
	top:20px;
}

body > header > nav li {
	display:block;
	float:left;
	overflow:hidden;
}

body > header > nav li a {
  font-size: 16px;
	display: inline-block;
	margin-left:10px;
}

body > article {
	clear:both;
}

body > footer {
	padding:40px 20px 20px 20px;
	opacity:.5;
	clear:both;
	position:relative;
}

body > footer > nav li {
	display:inline;
}

body > footer > nav li a {
	float:left;
}
body > footer > nav li a.next {
	float:right;
}

body > article > header > h1 {
	font-size:120px;
	line-height:.9;
	letter-spacing:-4px;
	margin:80px 20px;
}

body > article > p {
	font-size:30px;
	line-height:1.1;
	border-style:solid;
	border-width:2px 0;
	padding:20px 0;
	margin:20px;
}

body > article > p > a.more {
	margin-left:10px;
	opacity:1;
}

body > article > p > a.more:hover {
	opacity:.5;
}

body > article > p > a.more img {
	height:20px;
	width:20px;
}

blockquote, section.news, section.twitter {
	display:block;
	width:33.3%;
	float:left;
}

blockquote p {
	margin:20px;
}

blockquote p {
	margin:20px;
}

blockquote p:first-child:before { content: "â€œ"; margin-left:-6px; }
blockquote p:nth-last-child(2):after { content: "â€"; }

section.news > *, section.twitter > * {
	margin:20px;
}

section.news header, section.twitter header {
	line-height:1.1;
}

section.news h2, section.news time, section.twitter time {
	display:inline;
	font-size:13px;
}

section.twitter h1 {
	display:inline;
}

section.twitter h1 a:before {content: "@";}

section.news time, section.twitter time {
	margin-left:8px;
	opacity:.5;
}

section.news p, section.twitter p {
	margin:2px 0;
}

section.news > a, section.twitter > a {
	display:block;
	opacity:.5;
}

section.news > a:hover, section.twitter > a:hover {
	opacity:.25;
}

a.previous:before, a.next:after {
  font-size: 16px;
  vertical-align: middle;
  padding: 0 6px;
}

a.previous:before {
  padding-right: 6px;
}

a.next:after {
  padding-left: 6px;
}

body > article > p:before {opacity:.5;}
body > article > p:before {content: "n. ";}
body > article.verb > p:before {content: "v. ";}
body > article.adjective > p:before {content: "adj. ";}
body > article.adverb > p:before {content: "adv. ";}
body > article.pronoun > p:before {content: "pron. ";}

/* panes */

#pane {
	position:relative;
	overflow:hidden;
	display:none;
	background:rgba(51,51,51,.15);
	padding:20px 0;
}

#pane a.close {
	z-index:101;
	display:block;
	position:absolute;
	top:10px;
	right:10px;
	width:20px;
	height:20px;
	text-align:center;
	font-size:12px;
	line-height:1;
	color:rgba(51,51,51,.3);
}

#pane article {
	position:relative;
}

#pane article > header, #pane article > span.col {
	width:33.3%;
	float:left;
}

#pane article > header > h1 {
	font-size:60px;
	margin-left:20px;
}
#pane article > header > h1:before {
  font-size:80%;
  padding-right:10px;
}

#pane article h2 {
	font-size:20px;
	line-height:1.2;
}

#pane article p, #pane article h2 {
	margin:10px 20px 10px 20px;
}

#pane .credit, #pane .subscribe {
	margin-top:20px;
	font-size:12px;
	font-weight:bold;
}

#pane .subscribe:before {
  padding-right: 6px;
  opacity: 0.5;
}

#pane .subscribe {
	margin-left:0;
	margin-bottom:20px;
}

#pane div.social {
	clear:both;
	position:absolute;
	left:20px;
	bottom:-2px;
}

#pane iframe.twitter-follow-button {width:220px !important;}

/* hacks */

body > footer:before, body > footer:after,
#pane #about > article:before, #pane #about > article:after,
.clearfix:before, .clearfix:after {
	content:"\0020";
	display:block;
	height:0;
	overflow:hidden;
}
body > footer:after,
#pane #about > article:after,
.clearfix:after {
	clear:both;
}
body > footer,
.clearfix {
	zoom:1
}

/* media queries */

@media (min-width:1520px) {

	body > article > p:before {margin-left:-32px;}
	body > article.verb > p:before {margin-left:-30px;}
	body > article.adjective > p:before {margin-left:-56px;}
	body > article.adverb > p:before {margin-left:-63px;}
	body > article.pronoun > p:before {margin-left:-76px;}

}

@media (max-width: 1000px) {

	body > article > header > h1 {
  	font-size:100px;
  	letter-spacing:-2px;
  }

}

@media (max-width: 768px) {

	body > article > header > h1 {
  	font-size:80px;
  	letter-spacing:-2px;
  }

  #pane article {
		margin-left:80px;
  }

  #pane div.social {
  	position:relative;
  	bottom:auto;
  	left:auto;
  	margin:20px 20px 10px 20px;
  }

  #pane article > header {
		margin-left: -80px;
		width: 70px;
		overflow: hidden;
  }

  #pane article > span.col {
  	width:auto;
  	float:none;
  }

}

@media (max-width: 640px) {

	html { -webkit-text-size-adjust:none; -ms-text-size-adjust:none; }

  body > article > header > h1 {
  	font-size:60px;
  	letter-spacing:-2px;
  }

  body > article > p {
  	font-size:22px;
  	padding:20px 0;
  }

  body > article > p > a.more img {
		height:16px;
		width:16px;
	}

	blockquote {
		margin:40px 0;
	}

  blockquote, section.news, section.twitter {
  	float:none;
  	width:auto;
  }

  section.news, section.twitter {
  	margin:20px 20px 40px 20px;
  	padding-top:20px;
  	border-top:2px solid rgba(51,51,51,.25);
  }

  section.news > *, section.twitter > * {
  	margin:20px 0;
  }

  html.iphone #pane {
  	position:absolute;
		top:0;right:0;left:0;
		-webkit-backface-visibility: hidden;
		-webkit-transform: rotateY(180deg);
	}

	html.iphone body {
		-webkit-perspective: 1000;
		-webkit-transform-style: preserve-3d;
		-webkit-transition: all .5s ease-in-out;
		-webkit-transform: rotateY(0deg);

	}

	html.iphone body.show_pane {
		-webkit-transform: rotateY(180deg);
	}

	html.iphone body.show_pane #pane {
		display:block;
	}

	html.iphone body > header, html.iphone body > article, html.iphone body > footer {
		-webkit-backface-visibility: hidden;
		-webkit-transform: rotateY(0deg);
	}

}

@media (orientation:portrait) and (max-width: 480px) {

	body > header {
		font-size:20px;
	}

	body > article > header > h1 {
  	font-size:34px;
  	letter-spacing:-1px;
  	margin:60px 20px;
  }

  #pane article {
  	margin-left:0;
  }

  #pane #about {
  	background:none;
  }

}
s
