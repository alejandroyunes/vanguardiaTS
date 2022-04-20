interface BlogData {
  id: number;
  title: string;
  url: string;
  blogSummary: string;
  articleSummary: string;
  time: string;
  related: string;
  shared: string[];
  step: {
    title: string;
    step: string;
    description: string;
  }[];
}

// import linuxWindows from "../../assets/blog/linux-windows.jpg";

export const blogDataProps: BlogData[] = [
  {
    id: 1,
    title:
      "Cómo instalar Linux junto con Windows 10 u 8 en modo UEFI de arranque dual.",
    url: "/assets/blog/linux-windows.jpg",
    blogSummary:
      "Esta guía te mostrará cómo correr Linux y Windows 10  juntos en un solo sistema operativo",
    articleSummary:
      "Esta guía te mostrará cómo correr Linux y Windows 10  juntos en un solo sistema operativo.  Los pasos mencionados aquí sirven para  otras distribuciones de Linux basadas en Ubuntu, como Linux Mint, Manjaro, Deepin OS, etc. Cortando la charla, veamos cómo arrancar Linux de forma dual en un sistema Windows 10/8 habilitado para arranque seguro UEFI.",
    time: "12",
    related: "CSS, Tools, Workflow",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Haz una copia de seguridad [opcional]",
        step: "Paso 1:",
        description:
          "Siempre es bueno hacer una copia de seguridad, por si acaso pasa algo. ",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Lo siguiente que debe hacer es crear un disco o USB de arranque del sistema operativo Windows.. Recomiendo la herramienta de creación de medios de Windows (Media Creation Tool).   Una vez que inicie la herramienta, ésta te guiará a través de los pasos necesarios para crear los medios de Windows en un USB o DVD-R. Nota: Incluso si ya tiene Windows 10 instalado, es una buena idea crear un dispositivo de arranque de todos modos, en caso de que algo salga mal y necesite re-instalarlo. ",
      },
    ],
  },
  {
    id: 2,
    title: "Cómo instalar un sitio web en menos de 20 minutos.",
    url: "/assets/blog/wordpress.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 3,
    title: "¿Cósas que puedes hacer con CSS hoy?",
    url: "/assets/blog/css.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 4,
    title: "¿Cómo instalar React?",
    url: "/assets/blog/react.jpg",
    blogSummary:
      "Esta guía te mostrará cómo correr Linux y Windows 10  juntos en un solo sistema operativo",
    articleSummary:
      "Esta guía te mostrará cómo correr Linux y Windows 10  juntos en un solo sistema operativo.  Los pasos mencionados aquí sirven para  otras distribuciones de Linux basadas en Ubuntu, como Linux Mint, Manjaro, Deepin OS, etc. Cortando la charla, veamos cómo arrancar Linux de forma dual en un sistema Windows 10/8 habilitado para arranque seguro UEFI.",
    time: "12",
    related: "CSS, Tools, Workflow",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Haz una copia de seguridad [opcional]",
        step: "Paso 1:",
        description:
          "Siempre es bueno hacer una copia de seguridad, por si acaso pasa algo. ",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Lo siguiente que debe hacer es crear un disco o USB de arranque del sistema operativo Windows.. Recomiendo la herramienta de creación de medios de Windows (Media Creation Tool).   Una vez que inicie la herramienta, ésta te guiará a través de los pasos necesarios para crear los medios de Windows en un USB o DVD-R. Nota: Incluso si ya tiene Windows 10 instalado, es una buena idea crear un dispositivo de arranque de todos modos, en caso de que algo salga mal y necesite re-instalarlo. ",
      },
    ],
  },
  {
    id: 5,
    title: "¿Cuáles son los mejores plug-ins para un sitio en WordPress?",
    url: "/assets/blog/wordpress-plugins.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 6,
    title: "¿Cuáles son los mejores programas para diseñar?",
    url: "/assets/blog/figma-xd.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 7,
    title: "Mejores recursos para aprender a programar",
    url: "/assets/blog/wordpress-plugins.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 8,
    title: "Github & Bitbucket",
    url: "/assets/blog/githubbitbucket.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
  {
    id: 9,
    title: "Mejores recursos para aprender a programar",
    url: "/assets/blog/htmlcssjs.jpg",
    blogSummary:
      "Si ya tienes un dominio y  hosting en siteground es más sencillo, pero si no, no te preocupes.",
    articleSummary:
      "Si ya tienes un dominio y  hosting en siteground realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: "Wordpress, Tools, Marketing",
    shared: ["Twitter", "LinkedIn", "Facebook"],
    step: [
      {
        title: "Instalar Bitnami ",
        step: "Paso 1:",
        description:
          "Vamos a instalar Bitnami para instalar todo con un solo instalador.  Con Bitnami vamos a instalar todo el Stack necesario para correr wordpress en nuestro equipo local. https://bitnami.com/stack/wamp/installer",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10  a 15 minutos. Después de tener instalado bitnami, vamos a instalar la aplicación de wordpress también dejaré el link https://bitnami.com/stack/wordpress/installer",
      },
    ],
  },
];
