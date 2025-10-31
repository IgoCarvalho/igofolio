import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Image from 'next/image';
import { LinksSocial } from './LinksSocial';

export function Hero() {
  return (
    <section
      id="home"
      className={`w-full flex md:flex-row flex-col sm:py-16 py-6 bg-zinc-900 min-h-screen bg-blusrred bg-cover bg-gradisent-to-r from-[#08112d] to-[#3c3e56]`}
    >
      <div className="flex xl:max-w-[1280px] w-full mx-auto">
        <div
          className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-5xl text-[52px] text-white ss:leading-relaxed leading-3">
              Igo Carvalho <br className="sm:block hidden" />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] via-[#42d392] to-[#647eff]">
                Desenvolvedor <br /> Front-end
              </span>{' '}
            </h1>
          </div>

          <p className={`max-w-[470px] mt-5 text-lg`}>
            Desenvolvedor com mais de 3 anos de experiência, atuando em projetos
            de diferentes tamanhos e desenvolvendo soluções para resolver
            necessidades de diferentes nichos, desde E-commerces, Sites
            institucionais e Plataformas SaaS
          </p>

          <div className="mt-8">
            <LinksSocial />
          </div>
        </div>

        <div className={`flex-1 flex items-center md:my-0 my-10 relative`}>
          <Image
            src="/images/my-photo.png"
            alt="billing"
            width={699}
            height={647}
            className="z-50"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
          {/* gradient end */}
        </div>
      </div>
    </section>
  );
}
