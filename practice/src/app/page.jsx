// import LearnLink from "@/components/LearnLink";
// import LearnUseRouter from "@/components/LearnUseRouter";

// import LearnCssModule from "@/components/LearnCssModule";
import LearnUseImage from "@/components/LearnUseImage";
import LearnDataFetching from "@/components/LearnDataFetching";
// import LearnGlobalCss from "@/components/LearnGlobalCss";
// import LearnClientComponent from "@/components/LearnClientComponent";
// import LearnServerComponent from "@/components/LearnServerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}
      {/* <LearnGlobalCss /> */}
      {/* <LearnCssModule /> */}
      <LearnDataFetching />
      {/* <LearnUseImage /> */}
    </main>
  );
}
