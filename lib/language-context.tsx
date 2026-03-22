"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "en" | "ar" | "he"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_elo: "Elo",
    nav_contact: "Contact",
    hero_tagline: "We don't just build code;",
    hero_tagline_highlight: "we build living digital experiences.",
    hero_description: "At Eon Light, we transform ideas into intelligent, breathing digital solutions that evolve with your business.",
    cta_button: "Build Your Future with Us",
    cta_contact: "Contact Eon Light",
    meet_elo: "Meet Elo",
    elo_description: "This is our AI avatar, the company's digital assistant that embodies the spirit of innovation and live interaction at Eon Light.",
    services_title: "What We Create",
    service_1_title: "AI-Powered Solutions",
    service_1_desc: "Intelligent systems that learn, adapt, and grow with your business needs.",
    service_2_title: "Digital Experiences",
    service_2_desc: "Immersive interfaces that captivate users and drive engagement.",
    service_3_title: "Cloud Architecture",
    service_3_desc: "Scalable, secure infrastructure built for the demands of tomorrow.",
    footer_tagline: "Illuminating the path to digital innovation",
    footer_rights: "All rights reserved.",
    about_title: "Eon Light",
    about_vision: "At Eon Light, we don't just build software solutions; we weave the threads of the future. Our vision transcends code and matrices to touch the essence of humanity. We believe technology is the most powerful tool for spreading knowledge and creativity. Our motto, 'You are the light of the world,' is not just words, but our invitation to every partner and visitor that we are here to illuminate your hidden capabilities and help you leave your mark on the digital universe.",
    contact_subheader: "Illuminating the path to digital innovation",
    contact_prompt: "Connect with us through:",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "نحن",
    nav_services: "خدماتنا",
    nav_elo: "إيلو",
    nav_contact: "اتصل بنا",
    hero_tagline: "نحن لا نبني مجرد أكواد؛",
    hero_tagline_highlight: "بل نبني تجارب رقمية حيّة.",
    hero_description: "في إيون لايت، نحوّل الأفكار إلى حلول رقمية ذكية ومتطورة تنمو مع أعمالك.",
    cta_button: "ابنِ مستقبلك معنا",
    cta_contact: "تواصل مع إيون لايت",
    meet_elo: "قابل إيلو",
    elo_description: "هذا هو أفاتار الذكاء الاصطناعي الخاص بنا، مساعد الشركة الرقمي الذي يجسد روح الابتكار والتفاعل الحي في ايون لايت.",
    services_title: "ماذا نُبدع",
    service_1_title: "حلول مدعومة بالذكاء الاصطناعي",
    service_1_desc: "أنظمة ذكية تتعلم وتتكيف وتنمو مع احتياجات عملك.",
    service_2_title: "تجارب رقمية",
    service_2_desc: "واجهات غامرة تأسر المستخدمين وتزيد التفاعل.",
    service_3_title: "بنية سحابية",
    service_3_desc: "بنية تحتية قابلة للتوسع وآمنة مبنية لتحديات الغد.",
    footer_tagline: "نُنير الطريق نحو الابتكار الرقمي",
    footer_rights: "جميع الحقوق محفوظة.",
    about_title: "ايون لايت",
    about_vision: "في ايون لايت، لا نبني مجرد حلول برمجية، بل ننسج خيوط المستقبل. رؤيتنا تتجاوز الأكواد والمصفوفات لتلامس جوهر الإنسان، نؤمن أن التكنولوجيا هي الأداة الأقوى لنشر المعرفة والإبداع. شعارنا، 'أنتم نور العالم'، ليس مجرد كلمات، بل هو دعوتنا لكل شريك وزائر بأننا هنا لنضيء قدراتكم الكامنة ونساعدكم على ترك بصمتكم في الكون الرقمي.",
    contact_subheader: "نُنير الطريق نحو الابتكار الرقمي",
    contact_prompt: "تواصل معنا من خلال:",
  },
  he: {
    nav_home: "בית",
    nav_about: "אודות",
    nav_services: "שירותים",
    nav_elo: "אלו",
    nav_contact: "צור קשר",
    hero_tagline: "אנחנו לא רק בונים קוד;",
    hero_tagline_highlight: "אנחנו בונים חוויות דיגיטליות חיות.",
    hero_description: "ב-Eon Light, אנו הופכים רעיונות לפתרונות דיגיטליים חכמים ונושמים שמתפתחים עם העסק שלך.",
    cta_button: "בנה את העתיד שלך איתנו",
    cta_contact: "צור קשר עם Eon Light",
    meet_elo: "הכירו את אלו",
    elo_description: "זהו הדמות הדיגיטלית שלנו, העוזר הדיגיטלי של החברה שמגלם את רוח החדשנות והאינטראקציה החיה ב-Eon Light.",
    services_title: "מה אנחנו יוצרים",
    service_1_title: "פתרונות מונעי AI",
    service_1_desc: "מערכות חכמות שלומדות, מסתגלות וצומחות עם צרכי העסק שלך.",
    service_2_title: "חוויות דיגיטליות",
    service_2_desc: "ממשקים סוחפים שמרתקים משתמשים ומניעים מעורבות.",
    service_3_title: "ארכיטקטורת ענן",
    service_3_desc: "תשתית מדרגית ומאובטחת שנבנתה לדרישות המחר.",
    footer_tagline: "מאירים את הדרך לחדשנות דיגיטלית",
    footer_rights: "כל הזכויות שמורות.",
    about_title: "Eon Light",
    about_vision: "ב-Eon Light, אנחנו לא רק בונים פתרונות תוכנה; אנחנו אורגים את חוטי העתיד. החזון שלנו חורג מקוד ומטריצות כדי לגעת במהות האנושית. אנו מאמינים שטכנולוגיה היא הכלי החזק ביותר להפצת ידע ויצירתיות. המוטו שלנו, 'אתם אור העולם', אינו רק מילים, אלא הזמנה שלנו לכל שותף ומבקר שאנחנו כאן להאיר את היכולות הנסתרות שלכם ולעזור לכם להשאיר את חותמכם ביקום הדיגיטלי.",
    contact_subheader: "מאירים את הדרך לחדשנות דיגיטלית",
    contact_prompt: "התחברו איתנו דרך:",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || key
    },
    [language]
  )

  const dir = language === "ar" || language === "he" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const languageNames: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  he: "עברית",
}
