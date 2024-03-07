import PageHeader from "../../layout/components/PageHeader"

export default function About() {
  return (
    <>
      <PageHeader>About Me</PageHeader>
      <section className="space-y-5 p-5 text-xl lg:p-10">
        <div className="border-2 border-stone-900 bg-stone-200 p-5 lg:p-10 space-y-5">
          <h2 className="text-4xl">The Highlights</h2>
          <p>
            Back in 2003/4 I was introduced to web development in my junior year
            of high school making basic HTML sites.
          </p>
          <p>
            Senior year of high school I led the advanced multimedia class to
            re-design the school&apos;s website.
          </p>
          <p>
            After graduating high school, I got into freelance web development
            work with several local small business clients along with some
            corporate contract work.
          </p>
          <p>
            I left the world of web development in 2010 to become an Electronics
            Technician in the US Navy where I learned how to monitor, maintain
            and mend multiple air traffic control radar and radio systems.
          </p>
          <p>
            Post-Navy, I transitioned into an Equipment Maintenance Technician
            II, and soon after, an Automation Controls Technician role at Tesla.
          </p>
          <p>
            During my time at Tesla, I re-introduced myself to the world of web
            development by enrolling into self-paced online courses, and then
            eventually enrolled into UC Berkeley&apos;s 6 month long Full Stack
            Web Development Boot Camp.
          </p>
          <p>
            Now, I&apos;m back to freelancing, building full stack apps and
            focusing on perfecting my skills in both development and design.
          </p>
        </div>
        <div className="border-2 border-stone-900 bg-stone-200 p-5 lg:p-10 space-y-5">
          <h2 className="text-4xl">Hobbies</h2>
          <ul className="space-y-2 ml-5 list-disc">
            <li>Long Distance Running</li>
            <li>Hiking</li>
            <li>Traveling</li>
            <li>Home Cooking</li>
            <li>Gaming</li>
            <li>Anime</li>
            <li>Building PC&apos;s</li>
          </ul>
        </div>
        <div className="border-2 border-stone-900 bg-stone-200 p-5 lg:p-10 space-y-5">
          <h2 className="text-4xl">Personal Journey</h2>
          <p>Born in New Jersey, but raised in Georgia,</p>
          <p>
            Moved and lived in the Chicago area for about a year when I joined
            the Navy,
          </p>
          <p>
            Was stationed in the metro area of Tokyo, Japan for 3 years thanks
            to the Navy,
          </p>
          <p>
            Got to live in the Florida panhandle for a few months after that,
          </p>
          <p>
            Then was sent to live on the Kyushu island of Japan for about 2
            years befor ending my Navy career in San Diego, California,
          </p>
          <p>
            After the Navy I lived in Indonesia for about a year until i came
            back to the USA,
          </p>
          <p>
            Now I&apos;m currently living in the San Francisco Bay Area, where I
            have been for the last 4+ years.
          </p>
        </div>
      </section>
    </>
  );
}
