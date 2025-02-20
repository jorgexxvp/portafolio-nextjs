'use client';
import { ETheme } from '@/toolbox/enums/theme';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import '../globals.css';
import { CustomButton, IconButton } from '@/components';
import { GithubIcon, MoonIcon, SunIcon } from '@/toolbox';

export default function Portafolio() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center">
      <IconButton
        onClick={() => {
          setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
        }}
        icon={theme === ETheme.LIGHT ? MoonIcon.src : SunIcon.src}
      />

      <CustomButton
        icon={GithubIcon.src}
        url="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component"
        text="Github"
      />
      <div className="flex flex-col gap-5 justify-center text-center p-5">
        <p className="text-8xl text-white-300">Jorge Luis Valdez Pacheco</p>
        <p className="text-5xl text-white-300">Software Developer</p>
      </div>
      <div className="flex flex-row  gap-5 justify-center text-center p-5 bg-white-0 bg-opacity-5 w-full">
        <div className="w-1/3 flex flex-row border-r-blue-900 border-r-2 justify-center items-center">
          <Image
            width={200}
            height={200}
            className="rounded-full"
            src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
            alt="foto"
          />
        </div>
        <div className="w-4/6 p-10 flex flex-col gap-5 justify-center items-center">
          <span className="text-4xl">About Me</span>
          <p className="text-xl">
            Mi experiencia se centra en el desarrollo y soporte de interfaces de
            usuario, así como en la mejora de la experiencia del usuario en
            sitios web y aplicaciones web, haciendo uso del framework React y
            Next. Tengo habilidades sólidas en el manejo de tecnologías como
            TypeScript, HTML, SCSS, CSS, Sass y JavaScript para lograr
            resultados óptimos. Además, tengo experiencia en la integración de
            diversas bibliotecas que enriquecen el diseño y la funcionalidad de
            los proyectos, como Material-UI para una interfaz visual atractiva,
            React Hook Form para formularios eficientes y React Router para la
            navegación fluida entre páginas. Integración de APIs de manera
            eficiente utilizando React Query, lo que permite un flujo de datos
            más eficaz y una interacción más dinámica con el usuario. Utilizo
            Git para el control de versiones, lo que facilita la colaboración en
            equipo y la gestión de los desarrollos. Cuento con experiencia en la
            metodología ágil SCRUM, participando activamente en reuniones
            diarias
          </p>
        </div>
      </div>
    </div>
  );
}
