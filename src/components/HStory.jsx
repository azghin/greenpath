import StoryCard from "../layouts/StoryCard";

function HStory(){
    return(
        <section id="Homestories">
            <div className="container">
                <div className="story-desc centertext">
                    <h3 className="section-title">Explore ppl stories</h3>
                </div>
                <StoryCard/>
                <StoryCard/>
                <StoryCard/>
            </div>
        </section>
    )
}
export default HStory