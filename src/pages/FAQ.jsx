import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const faqs = [
  {
    question: 'What can I expect from my first session?',
    answer:
      'Your first session is an opportunity for us to get to know each other. We\'ll discuss what brought you in, what you\'re hoping to achieve, and begin to understand your background and circumstances. There\'s no pressure to share more than you\'re comfortable with — we move at your pace.',
  },
  {
    question: 'How long does therapy typically take?',
    answer:
      'The length of therapy varies depending on your goals and circumstances. Some people find a few sessions helpful for a specific issue, while others benefit from longer-term support. We\'ll regularly review your progress together and adjust the plan as needed.',
  },
  {
    question: 'Do you offer Medicare rebates?',
    answer:
      'Yes. With a Mental Health Treatment Plan from your GP, you may be eligible for Medicare rebates on up to 10 individual sessions per calendar year. We recommend speaking with your GP about whether this is appropriate for you.',
  },
  {
    question: 'Are sessions confidential?',
    answer:
      'Confidentiality is a cornerstone of our practice. What you share stays between us, with a few legal exceptions — such as if there is a risk of harm to yourself or others, or if we are required by a court order. We will always discuss the limits of confidentiality with you at the outset.',
  },
  {
    question: 'Are sessions telehealth or in person?',
    answer:
      'At the moment, we are offering telehealth sessions only while we find a new location. Sessions are conducted via video call and are just as effective as in-person appointments. We will update our clients as soon as a physical location becomes available.',
  },
  {
    question: 'What is the difference between a psychologist and a psychiatrist?',
    answer:
      'Psychologists are trained in psychological assessment and therapy. Psychiatrists are medical doctors who specialise in mental health and can prescribe medication. Both play important roles, and we are happy to collaborate with your psychiatrist or GP as part of your care team.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer:
      'We ask for at least 24 hours\' notice for cancellations or rescheduling. No-shows and late cancellations will incur a fee unless there are exceptional circumstances. If something comes up, please get in touch as soon as possible and we\'ll do our best to find a suitable time.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-sand last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-body font-semibold text-brand-charcoal">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-brand-sage-dark transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="font-body text-brand-muted leading-relaxed pb-5">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-sage-dark py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to some of the questions we hear most often. If you don't see what you're looking for, feel free to get in touch."
            light
          />
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-14 md:py-20 px-6 bg-brand-beige">
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-cream rounded-3xl shadow-card px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-brand-muted mb-4">Still have questions?</p>
            <Button to="/contact" variant="primary" size="md">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
