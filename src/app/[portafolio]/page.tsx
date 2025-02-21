'use client';
import { ETheme } from '@/toolbox/enums/theme';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import '../globals.css';
import { CustomButton, IconButton } from '@/components';
import { GithubIcon, MoonIcon, SunIcon } from '@/toolbox';
import { Slider } from '@/components/Slider';
import useWindowSize from '@/toolbox/utils/useWindowSize';

export default function Portafolio() {
  const { setTheme, theme } = useTheme();
  const components = [
    <div key="1" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript</p>
      </div>
    </div>,
    <div key="2" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 2</p>
      </div>
    </div>,
    <div key="3" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 3</p>
      </div>
    </div>,
    <div key="4" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 4</p>
      </div>
    </div>,
    <div key="5" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 5</p>
      </div>
    </div>,
    <div key="6" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 6</p>
      </div>
    </div>,
    <div key="7" className="flex flex-col gap-3">
      <div className="flex flex-col w-full h-full text-center justify-center items-center">
        <Image
          alt="skill"
          src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png"
          width={160}
          height={160}
        />
        <p className="text-4xl">Typescript 7</p>
      </div>
    </div>,
  ];
  const mockProject = [
    {
      url: '',
      title: 'Titulo 1',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
    {
      url: '',
      title: 'Titulo 2',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
    {
      url: '',
      title: 'Titulo 3',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
    {
      url: '',
      title: 'Titulo 4',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
    {
      url: '',
      title: 'Titulo 5',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
    {
      url: '',
      title: 'Titulo 6',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    },
  ];
  const data = [
    {
      title: 'Desarrollador Front End - ReactJS/NextJS',
      description: '2MYR(09/2020 - 07/2022)',
      function: [
        '-Desarrollo de la interfaz de usuario y diseño responsive. ',
        '-Implementación de funcionalidades como botones, formularios, tablas, dashboard, etc.',
        '-Integración de APIs además del uso de herramientas como Postman, StopLight.',
        '-Mantenimiento, correcciones, optimización y refactorizar de proyectos. ',
      ],
    },
    {
      title: 'Desarrollador Front End - ReactJS/NextJS',
      description: '2MYR(09/2020 - 07/2022)',
      function: [
        '-Desarrollo de la interfaz de usuario y diseño responsive. ',
        '-Implementación de funcionalidades como botones, formularios, tablas, dashboard, etc.',
        '-Integración de APIs además del uso de herramientas como Postman, StopLight.',
        '-Mantenimiento, correcciones, optimización y refactorizar de proyectos. ',
      ],
    },
    {
      title: 'Desarrollador Front End - ReactJS/NextJS',
      description: '2MYR(09/2020 - 07/2022)',
      function: [
        '-Desarrollo de la interfaz de usuario y diseño responsive. ',
        '-Implementación de funcionalidades como botones, formularios, tablas, dashboard, etc.',
        '-Integración de APIs además del uso de herramientas como Postman, StopLight.',
        '-Mantenimiento, correcciones, optimización y refactorizar de proyectos. ',
      ],
    },
  ];

  const { width } = useWindowSize();
  const visibleCount =
    width > 1550 ? 5 : width > 1250 ? 4 : width > 950 ? 3 : width > 650 ? 2 : 1;

  return (
    <div className="flex flex-col items-center justify-center">
      <IconButton
        onClick={() => {
          setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
        }}
        icon={theme === ETheme.LIGHT ? MoonIcon.src : SunIcon.src}
      />
      <p>{width}</p>
      <CustomButton
        icon={GithubIcon.src}
        url="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component"
        text="Github"
      />
      <div className="flex flex-col gap-5 justify-center text-center p-5">
        <p className="text-8xl text-white-300">Jorge Luis Valdez Pacheco</p>
        <p className="text-5xl text-white-300">Software Developer</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-5 justify-center text-center p-5 bg-white-0 bg-opacity-5 w-full">
        <div className="w-1/3 flex flex-row justify-center items-center xl:border-r-blue-900 xl:border-r-2">
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
      <div className="p-10">
        <span className="text-4xl">Skills</span>
        <Slider visibleCount={visibleCount} components={components} />
      </div>
      <div className="flex flex-col gap-16 text-center p-5 bg-white-0 bg-opacity-5 w-full">
        <span className="text-6xl">Work Experience</span>
        <div
          className="grid grid-cols-1 gap-9  lg:grid-cols-2"
          style={{
            paddingRight: 'clamp(3.125rem, 0.551rem + 9.804vw, 9.375rem)',
            paddingLeft: 'clamp(3.125rem, 0.551rem + 9.804vw, 9.375rem)',
          }}
        >
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6 text-start">
              <p className="text-3xl">{item.title}</p>
              <p className="text-2xl">{item.description}</p>
              {item.function.map((func, index) => (
                <p key={index} className="text-xl">
                  {func}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 text-center flex flex-col gap-16">
        <span className="text-6xl">Projects</span>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:grid-cols-3"
          style={{
            paddingRight: 'clamp(3.125rem, 0.551rem + 9.804vw, 9.375rem)',
            paddingLeft: 'clamp(3.125rem, 0.551rem + 9.804vw, 9.375rem)',
          }}
        >
          {mockProject.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 text-start">
              <div className="bg-white-0 w-full h-44 rounded-3xl">
                {item.url}
              </div>
              <p className="text-3xl ">{item.title}</p>
              <p className="text-2xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
