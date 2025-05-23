import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { type CaseStudy, loadCaseStudies, type MDXEntry } from '@/lib/mdx'

import logoXinux from '@/images/clients/xinux/logo-light.svg'
import logoXinuxDark from '@/images/clients/xinux/logo-dark.svg'
import logoRust from '@/images/clients/rust-uzbekistan/logo-light.svg'
import logoDevOps from '@/images/clients/devops-journey/logo-light.svg'
import logoHaskell from '@/images/clients/haskell-uzbekistan/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

const clients = [
  ['Xinux', logoXinux],
  ["Rust O'zbekiston", logoRust],
  ["Haskell O'zbekiston", logoHaskell],
  ['Devops Journey', logoDevOps],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Bizning hamjamiyatlarimiz
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Izlanishlari sari olg'a"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Biz ishonamizki texnologiya da qilingan har bir izlanish ma'lum
          darajada qandaydir o'zining ahamiyatga ega va bizning vazifamiz bu
          izlanishlar potensialini cho'qqiga olib chiqish.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Izlanish</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Xizmatimiz"
        title="Tartib va moderatsiya, an'ana va madaniyat."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Biz bilan birga ishlashni boshlagan kuningizdanoq, biz birinchi
          o'rinda ushbu hamjamiyatdagi o'ta muhim element hisoblanmish; tartib,
          moderatsiya, har xil an'analar va madaniyatga e'tibor qaratamiz va
          unga shakl beramiz.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Tartib">
              Har bir hamjamiyat o'z spetsifik talab va tartibiga ega bo'lishi
              zarur. Ammo, bu talablar bir nimagadir asoslanishi kerak. Biz esa
              o'zimiznig standartlarimizdan kelib chiqib tartib yaratamiz.
            </ListItem>
            <ListItem title="Moderatsiya">
              Hozirgi vaqtdagi spam, bot va userbotlar hisobga olgan holda,
              guruhni toza va ortiqcha keraksiz ma'lumotlardan asrash qiyin. Biz
              esa ushbu protsessni qisman avtomatlashtirib, moderator guruhiga
              asos solamiz.
            </ListItem>
            <ListItem title="An'ana">
              Hamjamiyat a'zolarini bir-biri bilan yaqin ushlab turadigan yagona
              element bu an'ana hisoblanadi. Ushbu an'analarni esa, har xil
              entuziazmik eksperimentlar qilish yordamida kelib chiqishiga
              yordam beramiz.
            </ListItem>
            <ListItem title="Madaniyat">
              Hozirgi paytda ko'plab odamlarda sotsial tarmoq savodxonligi
              yo'qligi sabab, ko'plab tajribali inson va ko'ngillilar vaqti
              behuda ketmoqda. Biz ushbu muammoni avtomatlashtirish orqali
              bartaraf etamiz.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    "Biz hamjamiyatlarni birlashtirgan holda, ularni tartibga keltirib an'analarga shakl beramiz.",
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            O'zbek IT hamjamiyatlar aggregatori.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Biz o'zbek dasturchilari va uning hamjamiyatlarini shakllantiramiz,
            rivojlantiramiz va yordam beramiz. Bizning asosiy maqsadimiz,
            open-source olamini hammaga tanishtirish va u bilan erishilgan,
            hamda erishish mumkin bo'lgan cho'qqilarni yoritib berish.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Xinux', logo: logoXinuxDark }}
      >
        Hozirgi damda ko'plab hamjamiyatlar monopollashtirilgan va o'ta
        tartibsiz. Har xil standart va shakllar yordamida yordamida bu
        muammolarni hal qilish mumkin va Floss O'zbekiston shu maqsadda
        yaralgan.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
