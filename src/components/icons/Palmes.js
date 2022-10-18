import * as React from 'react'
const SvgPalmes = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 272 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M130.153 36.214h-3.987V17.719c.602 0 1.203-.014 1.805.014.07 0 .154.181.195.279.504 1.603 1.008 3.205 1.497 4.808.028.112.07.21.14.404.21-1.003.532-1.867 1.035-2.662 1.12-1.77 2.742-2.801 4.799-3.163a10.185 10.185 0 0 1 4.155.125c2.266.544 3.581 2.007 4.085 4.223.041.153.069.32.111.474 0 .014.014.014.042.056.042-.084.098-.154.112-.223.924-2.55 2.714-4.14 5.386-4.627 1.861-.349 3.721-.293 5.484.501 1.595.725 2.434 2.021 2.854 3.652.266 1.017.336 2.062.35 3.094v11.233c0 .098-.014.181-.014.293h-3.959c-.014-.14-.028-.279-.028-.432V25.05c0-.878-.084-1.742-.42-2.55-.392-.948-1.063-1.645-2.042-1.965-1.819-.586-3.61-.516-5.288.46-1.232.71-1.875 1.88-2.141 3.233a7.251 7.251 0 0 0-.126 1.352c-.014 3.386 0 6.773 0 10.16v.46h-4.001v-.418c0-3.652.014-7.303-.014-10.955 0-.641-.098-1.296-.279-1.923-.364-1.296-1.232-2.133-2.547-2.481-1.384-.376-2.783-.334-4.112.167-1.707.641-2.63 1.965-2.966 3.707a6.5 6.5 0 0 0-.098 1.171c-.014 3.429 0 6.871 0 10.3-.028.153-.028.292-.028.446ZM70.336 36.228h-4.322V10.305h.391c3.498-.014 7.009-.014 10.52-.014 2.085 0 4.17.111 6.212.627 1.692.418 3.273 1.087 4.406 2.509.686.864 1.035 1.854 1.147 2.94.126 1.185.056 2.356-.391 3.485-.616 1.56-1.805 2.55-3.302 3.22a12.918 12.918 0 0 1-4.84 1.114c-3.106.098-6.211.112-9.331.154h-.49v11.888Zm.014-14.718h1.162c2.518-.027 5.022-.027 7.54-.097a7.574 7.574 0 0 0 2.965-.697c1.47-.697 2.183-1.868 2.155-3.47-.028-1.631-.811-2.76-2.322-3.401-1.273-.53-2.602-.683-3.96-.697-2.406-.028-4.826-.014-7.232-.028-.098 0-.196.014-.308.028v8.362ZM183.077 27.42h-.294c-4.91-.098-9.834-.196-14.745-.28-.503-.014-.517 0-.475.488.14 1.812.713 3.429 2.14 4.641 1.091.934 2.378 1.38 3.805 1.464.979.056 1.959 0 2.896-.363 1.651-.64 2.56-1.895 2.952-3.568.07-.278.112-.571.168-.905.447.125.881.237 1.315.362.811.237 1.622.488 2.448.71.294.084.335.196.252.475-.882 2.69-2.686 4.501-5.33 5.49-2.071.767-4.211.92-6.394.6-1.636-.237-3.133-.78-4.504-1.686-1.819-1.227-3.036-2.9-3.637-5.018a10.604 10.604 0 0 1-.238-4.822c.545-3.052 2.168-5.352 5.036-6.704 2.015-.947 4.141-1.17 6.337-1.003 1.203.097 2.364.348 3.47.85 1.93.878 3.245 2.328 4.029 4.279.615 1.588.839 3.233.769 4.99Zm-9.821-2.314c0-.042 0 .041 0 0 1.497 0 2.98-.14 4.477-.14.28 0 .56-.014.839-.014.196 0 .294-.083.266-.278-.308-1.784-1.133-3.234-2.882-3.986-.993-.432-2.056-.544-3.133-.474-2.686.167-4.477 2.02-5.022 4.501-.07.335.028.39.349.39h5.106ZM91.096 22.695c.293-.794.741-1.463 1.259-2.09 1.623-1.924 3.749-2.9 6.211-3.247 1.511-.21 3.022-.182 4.519.153 1.888.432 3.525 1.24 4.574 2.954.714 1.157.909 2.44.881 3.764-.056 2.34-.125 4.682-.181 7.024-.014.46-.014.934.097 1.38.182.808.868 1.184 1.693 1.059.798-.126 1.343-.586 1.805-1.199.056-.07.112-.153.168-.223.014-.028.056-.042.126-.07.139.516.279 1.004.419 1.492.084.32.168.655.266.975.07.237.042.446-.168.614-1.804 1.435-3.833 1.728-5.987 1.031-1.091-.362-1.777-1.24-2.057-2.37-.321-1.282-.182-2.578-.21-3.874 0-.167-.014-.334-.027-.502-.028-.014-.056-.014-.098-.027-.07.153-.154.292-.224.445-.714 1.534-1.581 2.97-2.756 4.196-1.133 1.184-2.448 2.104-4.127 2.369-1.399.223-2.742.125-3.931-.739-.993-.724-1.483-1.728-1.58-2.927-.113-1.463.39-2.731 1.244-3.874 1.26-1.672 3.008-2.662 4.91-3.415 2.001-.794 4.099-1.226 6.226-1.477.266-.028.349-.125.349-.39-.013-1.784-1.119-3.122-2.895-3.443-2.015-.362-3.833.07-5.246 1.617-.434.474-.7 1.101-1.021 1.686-.112.21-.196.307-.448.237a340.77 340.77 0 0 0-3.553-1.017c-.056-.014-.126-.056-.238-.112Zm13.401 2.565c-.111.014-.195.014-.265.042-.77.237-1.539.432-2.295.71-1.762.655-3.469 1.436-4.742 2.885-.77.879-1.231 1.868-1.161 3.067.07 1.24.797 1.867 2.042 1.756.896-.084 1.68-.474 2.379-1.004 1.776-1.366 2.965-3.178 3.819-5.226.307-.711.279-1.45.223-2.23ZM200.915 23.95c-.196-.627-.294-1.226-.546-1.756-.307-.655-.853-1.115-1.524-1.422-1.581-.724-3.232-.752-4.883-.376-.923.209-1.72.683-1.944 1.728-.154.697.07 1.282.657 1.715.924.668 2.015.92 3.12 1.128 1.889.349 3.777.67 5.652 1.06a7.107 7.107 0 0 1 2.881 1.351c1.427 1.116 2.029 3.192 1.427 4.962-.503 1.52-1.58 2.523-2.965 3.22-1.931.975-4.001 1.254-6.142 1.114-1.734-.111-3.427-.39-5.008-1.128-2.154-1.004-3.735-2.565-4.504-4.864-.014-.028-.014-.042-.028-.07-.168-.544-.168-.544.391-.71 1.077-.321 2.169-.628 3.246-.935a1.06 1.06 0 0 1 .238-.041c.153.64.237 1.282.475 1.867.532 1.296 1.581 2.035 2.868 2.453 1.595.502 3.232.669 4.896.348.616-.125 1.203-.362 1.693-.78 1.133-.962 1.021-2.537-.238-3.331-.797-.502-1.678-.739-2.574-.92-1.93-.376-3.875-.669-5.791-1.115-1.329-.306-2.532-.948-3.414-2.049-1.329-1.644-1.161-4.376.49-5.965 1.091-1.045 2.406-1.616 3.847-1.91 2.21-.459 4.407-.361 6.575.238 1.637.446 3.078 1.268 4.085 2.69.447.64.811 1.324.937 2.104.014.098-.07.279-.154.307-1.245.376-2.504.725-3.749 1.087 0 .014-.028 0-.014 0ZM120.069 36.213h-3.973V10.722c1.315-.126 2.63-.237 3.973-.363v25.854Z"
      fill="#fff"
    />
  </svg>
)
export default SvgPalmes
