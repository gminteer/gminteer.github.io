(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[4],{60:function(e,A,t){"use strict";t.r(A),A.default="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMi4xNAAA/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAAQABAwEhAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VOigD//2Q=="},61:function(e,A,t){"use strict";t.d(A,"a",(function(){return g}));var r=t(8),a=t.n(r),n=t(13),i=t(12),o=t(0),c=t.n(o),l=t(26),u=t(62),p=t.n(u),s=t(60);function g(e){var A=e.style,r=e.title,u=e.body,g=e.imgCfg,B=Object(o.useState)(),E=Object(i.a)(B,2),Q=E[0],m=E[1],f=A?"".concat(p.a.Figure," ").concat(A):p.a.Figure;return Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(a.a.mark((function e(){var A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(63)("./".concat(g.src));case 2:A=e.sent,m(A.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g.src,Q]),c.a.createElement("figure",{className:f},c.a.createElement("div",{className:p.a.imgContainer},c.a.createElement("img",{src:Q||s.default,alt:g.alt})),c.a.createElement("figcaption",null,c.a.createElement(l.a,{styles:p.a,title:c.a.createElement("div",{className:p.a.cardTitle},r)},c.a.createElement("div",{className:p.a.cardBody},u))))}},62:function(e,A,t){e.exports={Figure:"Figure_Figure__11PKW",imgContainer:"Figure_imgContainer__3ruks",cardTitle:"Figure_cardTitle__1GzN5",cardBody:"Figure_cardBody__38K5H"}},63:function(e,A,t){var r={"./headshot.jpg":[64,11],"./lyric-look-up.jpg":[65,12],"./pair-pro.jpg":[66,13],"./placeholder.jpg":[60]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var A=new Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}));var A=r[e],a=A[0];return Promise.all(A.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=63,e.exports=a},69:function(e){e.exports=JSON.parse('[{"name":"pair.pro","blurb":"Swap skills with other developers","repo":"https://github.com/gminteer/pair-pro","live":"https://evening-shelf-38157.herokuapp.com/","img":{"src":"pair-pro.jpg","alt":"pair.pro in action"}},{"name":"Lyric Look-up","blurb":"Sing along with your favorite songs","repo":"https://github.com/Mayorgak/lyric-look-up","live":"https://Mayorgak.github.io/lyric-look-up","img":{"src":"lyric-look-up.jpg","alt":"Lyric Look-up in action"}}]')},70:function(e,A,t){e.exports={Figure:"Gallery_Figure__3zSX3"}},77:function(e,A,t){"use strict";t.r(A),t.d(A,"default",(function(){return u}));var r=t(0),a=t.n(r),n=t(61),i=t(69),o=t(27),c=t(70),l=t.n(c);function u(){return a.a.createElement(o.a,{style:l.a.Gallery,title:"~gminteer/projects"},i.map((function(e,A){return a.a.createElement(n.a,{imgCfg:e.img,style:l.a.Figure,title:a.a.createElement("h3",null,e.name),body:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,e.blurb),a.a.createElement("p",null,a.a.createElement("a",{href:e.live},"Live demo")),a.a.createElement("p",null,a.a.createElement("a",{href:e.repo},"View source"))),key:A})})))}}}]);
//# sourceMappingURL=4.8f4cd304.chunk.js.map