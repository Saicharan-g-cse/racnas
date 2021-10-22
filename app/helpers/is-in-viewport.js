export default function isInViewport(element) {
   let rect, html;
   if (!element || 1 !== element.nodeType) {
      return false;
   }
   html = document.documentElement;
   rect = element.getBoundingClientRect();

   return (
      !!rect &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= html.clientHeight &&
      rect.left <= html.clientWidth
   );
}
