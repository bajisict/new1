import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_BL0pny8L.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DbyIXfcl.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/","cacheDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/node_modules/.astro/","outDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/dist/","srcDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/src/","publicDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/public/","buildClientDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/dist/client/","buildServerDir":"file:///D:/New%20folder%20(2)/New%20folder/afraid-apogee/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/orders","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/orders\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"orders","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/orders.js","pathname":"/api/orders","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/posts.ts","pathname":"/api/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".product-card[data-astro-cid-tjdfhdqb]{transition:transform .2s}.product-card[data-astro-cid-tjdfhdqb]:hover{transform:translateY(-5px)}.wishlist-btn[data-astro-cid-tjdfhdqb]{width:40px;height:40px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/New folder (2)/New folder/afraid-apogee/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/orders@_@js":"pages/api/orders.astro.mjs","\u0000@astro-page:src/pages/api/posts@_@ts":"pages/api/posts.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/New folder (2)/New folder/afraid-apogee/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BIoBBHmt.mjs","\u0000@astrojs-manifest":"manifest_DAsAKH78.mjs","D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.w45Pi1Xg.js","D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.i6gGHLjS.js","D:/New folder (2)/New folder/afraid-apogee/src/components/CartButton.jsx":"_astro/CartButton.BhSPuJHX.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/New folder (2)/New folder/afraid-apogee/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){function s(e){let t=JSON.parse(localStorage.getItem(\"shopping-cart\")||\"[]\");console.log(\"aaaa1:\",t);const a=t.find(n=>n.id===e.id);a?a.quantity+=1:t.push({...e,quantity:1}),localStorage.setItem(\"shopping-cart\",JSON.stringify(t)),window.dispatchEvent(new Event(\"cartUpdated\")),o(`${e.name} сагсанд нэмэгдлээ!`,\"success\")}function o(e,t=\"info\"){const a=document.getElementById(\"toast-container\")||i(),n=document.createElement(\"div\");n.className=`toast align-items-center text-bg-${t} border-0`,n.setAttribute(\"role\",\"alert\"),n.innerHTML=`\n      <div class=\"d-flex\">\n        <div class=\"toast-body\">\n          <i class=\"bi bi-check-circle me-2\"></i>\n          ${e}\n        </div>\n        <button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\"></button>\n      </div>\n    `,a.appendChild(n),new bootstrap.Toast(n).show(),n.addEventListener(\"hidden.bs.toast\",()=>{n.remove()})}function i(){const e=document.createElement(\"div\");return e.id=\"toast-container\",e.className=\"toast-container position-fixed top-0 end-0 p-3\",e.style.zIndex=\"1055\",document.body.appendChild(e),e}document.addEventListener(\"click\",function(e){if(e.target.closest(\".add-to-cart-btn\")){e.preventDefault();const t=e.target.closest(\".add-to-cart-btn\"),a={id:parseInt(t.dataset.productId),name:t.dataset.productName,price:parseFloat(t.dataset.productPrice),image:t.dataset.productImage};s(a)}});function c(e){let t=JSON.parse(localStorage.getItem(\"shopping-cart\")||\"[]\");const a=t.findIndex(n=>n.id===e.id);a!==-1&&(t[a].quantity>1?t[a].quantity-=1:t.splice(a,1),localStorage.setItem(\"shopping-cart\",JSON.stringify(t)),window.dispatchEvent(new Event(\"cartUpdated\")),o(`${e.name} сагснаас хасагдлаа!`,\"warning\"))}document.addEventListener(\"click\",function(e){const t=e.target.closest(\".btn-outline-secondary\");if(console.log(\"aaaa2:\",t),t){e.preventDefault(),console.log(\"aaaa3:\",t);const a={id:parseInt(t.dataset.productId),name:t.dataset.productName,price:parseFloat(t.dataset.productPrice),image:t.dataset.productImage};c(a)}})});"]],"assets":["/data.json","/favicon.svg","/_astro/CartButton.BhSPuJHX.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/Layout.astro_astro_type_script_index_1_lang.w45Pi1Xg.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Q9waQTAEuUKve01eJBlQwtPwgx/R0Yz9Gndk6vKuFDI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
