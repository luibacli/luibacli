import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Hi, I'm Luigie, and I am a self-taught full stack developer
                    and a career shifter. I was a social studies teacher for
                    four years because I love talking about history, culture,
                    people and society. At the same time I was a freelance
                    virtual assistant as my part-time job.
                </p>
                <br />

                <p className="text-xl">
                    Until I discovered programming and finally found my niche. I
                    have developed a strong understanding of various programming
                    languages and frameworks through self-study, courses, and
                    personal projects. While I do not have any professional
                    experience, I am confident in my abilities and am eager to
                    apply my skills in a real-world setting. I am a quick
                    learner and am excited to continue growing and developing my
                    skills as a web developer.
                </p>

                <br />

                <p className="text-xl">
                    In addition to my technical skills, I am a highly motivated
                    and dedicated individual who is always looking for new
                    challenges and opportunities to grow. I am a strong
                    problem-solver and am able to think creatively to find
                    solutions to complex issues. I am also a great team player
                    and am able to work well with others to achieve common
                    goals.
                </p>
            </div>
        </div>
    );
};

export default About;
