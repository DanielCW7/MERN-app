import './images/html.webp';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp

/*

 this file acts as a wrapper for all pages in this project, allowing me to add global styles,
 configurations, layouts, and other customizations.
 this file is recognized as the entry point for my application. Nextjs recognizes this file
 and uses it to initialize and render my pages.

 naming convention: 
 the underscore at the beginning of the file name is unique to nextjs.
 this naming convention allows nextjs to identify and use this file as the custom app component.

 extending the App component:
 in this file, i extendt the 'App' component, you override the 'render' method. This allows you
 to override its methods and provide your custom implementation.

 Render Method: 
 Inside the custom App component, you override the render method. This method is 
 responsible for rendering your application and determining the layout or structure of the pages.
 
 Layout and Global Styles:
  Within the render method, you can define a layout component that wraps around all pages. 
  This layout component can provide consistent headers, footers, or any other elements shared 
  across multiple pages. Additionally, you can import and apply global stylesheets or CSS-in-JS 
  solutions. By importing your global CSS file (e.g., globals.css), you can ensure that the 
  styles are applied to all pages.

  Context Providers or Custom Logic: 
  If you have context providers or other custom logic that needs to be applied globally, 
  you can wrap the Component with the necessary providers or include the logic within the 
  render method.

  Exporting the Custom App Component: 
  Finally, you export the custom App component as the default export from the _app.js file.

 */