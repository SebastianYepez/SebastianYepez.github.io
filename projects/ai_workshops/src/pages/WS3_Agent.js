import React from "react"
import WorkShopLayout from "../components/WS_Layout"
import WorkshopOverview from "../components/WS_Overview";
import CollapsibleSection from "../components/CollapsibleSection";
import TerminalBlock from "../components/Terminal";
import JupyterCell from "../components/JupyterCell";
import { Link } from "react-scroll";
import "../styles/ws_styles/ws1.css";
import GoogleSlidesEmbed from "../components/GoogleSlidesEmbed";
import Chatbot from "../components/Chatbot";
import "../styles/ws_styles/ws3.css";

// Images
import AWSAgent from "../data/ws_resources/ws3imgs/AWSAgent.png"
import LMdmg from "../data/ws_resources/ws3imgs/LMdmg.png"
import LM1 from "../data/ws_resources/ws3imgs/LM1.png"
import LM2 from "../data/ws_resources/ws3imgs/LM2.png"
import LM3 from "../data/ws_resources/ws3imgs/LM3.png"
import LM4 from "../data/ws_resources/ws3imgs/LM4.png"
import LM5 from "../data/ws_resources/ws3imgs/LM5.png"
import KB from "../data/ws_resources/ws3imgs/KBase.png"


const summaryPoints = [
    "Learn how to build a custom AI Agent using a local large language model (LLM) hosted on your own machine using LM Studio.",
    "Understand how to create a React frontend to chat with your AI Agent using a user-friendly interface.",
    "Set up and run a Flask backend API to connect your frontend to the locally running model in LM Studio.",
    "Learn how to load a knowledge base into your chatbot to provide helpful answers according to your needs."
];

const resources = [
    { name: "Google Slides", file: "ws1/setup_venv.txt" },
    { name: "Chatbot.zip", file: "ws1/setup_venv.txt" }
];

const WS3_Agent = () => {
    return (
        <WorkShopLayout title="Workshop 3: How to Build an AI Agent">
            <p style={{ textAlign: "center" }}>Welcome to Workshop 3! In this session, we’ll cover how to build an AI agent - specifically,
                a Chatbot.</p>
            <WorkshopOverview workshopId="workshop3" summaryPoints={summaryPoints} resources={resources} />
            <section className="WorkshopSlides">
                <h4> Google Slides </h4>
                <p>The Google Slides created by UNLV's AI & Data Science Club in collaboration with Layer Zero. </p>
            </section>
            <GoogleSlidesEmbed
                embedUrl="https://docs.google.com/presentation/d/e/2PACX-1vQZVLxjOqLh3eeJe6RR1mgGPUuEVu-76al-8-1QhTfVHwIDTc1pKBog_QDBFfK3bGNyIqamKXvORgKv/embed?" />
            <h4 className="mt-3">What is an AI Agent, really?</h4>
            <p>Put into words by ChatGPT, "An AI Agent is a system that perceives its environment, makes decisions, and takes actions to achieve specific goals."</p>
            <p>Some examples of AI agents include:</p>
            <ul>
                <li>Chatbots (e.g., OpenAI's ChatGPT, customer service bots)</li>
                <li>Autonomous Vehicles (e.g., Tesla’s self-driving AI)</li>
                <li>Recommendation Systems (e.g., Netflix suggesting movies)</li>
                <li>Game-playing AI (e.g., AlphaGo)</li>
                <li>Trading Bots (e.g., AI-powered stock trading agents)</li>
            </ul>

            <p>Here is an example: AWS' AI Agent.</p>
            <div>
                <img src={AWSAgent} alt={"AWS Agent"} className="ws3-aws-image" />
            </div>

            <h4>The Significance and Future of AI Agents</h4>
            <p>We now know that an AI agent is essentially a system that works autonomously and uses parameters set by its
                designer to make decisions. I'm sure we've all seen this becoming all the more common with the emergence and popularization of chatbots
                on virtually every website you visit (and as shown above).
            </p>

            <p>This is a very exciting route we are taking, where we have these assistants that we can offload tasks to! </p>

            <p>
                Think of it, a CEO of a local startup who is trying to scale up can't afford many team members
                whose sole purpose it is to respond to emails. But, maybe he can (for a fraction of the price) create and maintain an AI agent to do so -
                both the CEO and the customer will be very happy!
            </p>

            <p>Below is an example of just that. In this 8 minute long video, the creator creates an AI agent to automatically create draft responses
                for emails he receives using OpenAI's ChatGPT 4.1 model!
            </p>
            <div style={{ marginLeft: "40px" }}>
                <a href="https://www.youtube.com/watch?v=xhIUS1zOdU8" target="_blank"
                    rel="noopener noreferrer">https://www.youtube.com/watch?v=xhIUS1zOdU8</a> <br /> <br />
            </div>

            <p>Sooner than you may think, we'll be at the point where we can tell our agents: </p>
            <p>
                <b>"Hey Buddy - please set up a steak dinner with Donald this week." </b></p>
            <p>
                And the agent will look for availability in both your calendar as well as Donald's while simultaneously booking a reservation at a
                selected steakhouse! Fascinating right?
            </p>

            <h4>How Can I "Build an AI Agent?"</h4>
            <p>So, what will we be going over today? Truthfully, building an AI Agent from scratch can turn out to be quite cumbersome. Especially if you take it
                upon yourself to build an LLM from scratch... which I'm not too sure I'd recommend. 😅
            </p>

            <p>Today, we will take advantage of an already trained, ready-to-go LLM and, because we don't want to rely on someone else's hardware or network - will be running it locally!</p>
            <p>Now you may be thinking to yourself - "But, Sebastian! Aren't these models huge?? How could we ever possibly download one?"</p>

            <p>Here I say to you, thank the very smart people that came up with <b><i>quantization.</i></b> Essentially, this is a method of shrinking the model
                size to optimize memory, but you lose important features such as context length. Read more <a href="https://medium.com/@florian_algo/model-quantization-1-basic-concepts-860547ec6aa9" target="_blank"
                    rel="noopener noreferrer">here</a>. </p>

            <p>Thankfully, tools like LMStudio and HuggingFace give us access to such quantized models - and today we will be
                using LMStudio to download one!</p>

            <p>Specifically, for those of you nerds reading this, we'll be using a 4-bit quantized version of a model from the LLaMA 3.2 family.</p>

            <p>Now, obviously, we don't have an intricate business or systems which we can automate, never mind create a tutorial for you to do the same. So in this workshop
                we will be exploring the key concept of a <b><i>knowledge base</i></b> and using <b><i>systems prompts</i></b> to get desirable and curated output.
            </p>

            <h5>"ChatGPT, summarize this"</h5>
            <p>Okay I get it, that's enough blabbering. To wrap it up, I'll just say this: </p>
            <p>Today we will use LMStudio to download a quantized LLaMa 3.2 model and run it locally on our machine. We take advantage of
                a knowledge base and system prompts to turn this LLM into an agent for the <b>AI and Data Science Club</b>! To communicate with this chatbot
                and mimic a proper customer experience, the frontend of the chatbot was made using React and we use Flask to communicate with
                the model on the LMStudio endpoint.
            </p>

            <p><b>Now let's get to the fun part!</b></p>

            <h4>Setting Up LMStudio</h4>
            <p>Please download LMStudio here: <a href="https://lmstudio.ai/" target="_blank"
                rel="noopener noreferrer">https://lmstudio.ai/</a></p>
            <CollapsibleSection title="Setting Up Our Model">
                <p>Once downloaded, please open it </p>
                <div>
                    <img src={LMdmg} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>
                <p>This is the welcome screen:</p>
                <div>
                    <img src={LM1} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>
                <p>Please download the following model (less than 2 GB, should be default):</p>
                <div>
                    <img src={LM2} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>
                <p>Now, you will see the following screen:</p>
                <div>
                    <img src={LM3} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>
                <p>On the left tab click on the green terminal icon, and at the top turn the server on.</p>
                <div>
                    <img src={LM4} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; This will allow us to send requests to the model from our backend!</p>
                <p>On the right handside, you should now see the endpoint by which we can reach our model!</p>
                <div>
                    <img src={LM5} alt={"LMStudio Setup"} className="ws3-lsm-image" />
                </div>

            </CollapsibleSection>

            <p>So, we have the model loaded, but we need a way to talk to the endpoint. How can I give it input?</p>

            <h4>Setting Up the Chatbot</h4>
            <p>
                Please download the{" "}
                <span
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
                >
                    Chatbot.zip
                </span>{" "}
                file under "Workshop Resources."
            </p>

            <p>Navigate to the <code style={{ display: "inline" }}>frontend/</code> folder </p>
            <small> *Note: you must have node.js install on your computer. If you don't, please install it here: <a href="https://nodejs.org/en/download" target="_blank"
                rel="noopener noreferrer">https://nodejs.org/en/download</a></small>

            <TerminalBlock
                initialText={
                    `cd frontend\n` +
                    `npm i\n` +
                    `npm start`}
                language="bash"
            />

            <p>Below is what our AI and Data Science club chatbot looks like!</p>

            <Chatbot />

            <p className="mt-3">"Okay, looks great and all and takes input Sebastian but I'm still not getting responses from the model?"
                Glad you pointed that out! Let's fix that in the final step.</p>

            <h4>Setting Up the Server</h4>

            <p>Now that we have our model loaded and frontend running, we have one thing left to do - facilitate a connection between them! :)</p>

            <p>To do this, we will be utilizing <b>Flask.</b> The specifics of Flask will be covered in an upcoming workshop, if you're interested!!</p>

            <p>All we need to do is start our backend server! Here is how: </p>

            <small>If you need help on setting up a Python environment (chatenv) check out <a href="https://sebastianyepez.com/projects/ai_workshops/#/workshop1" target="_blank"
                rel="noopener noreferrer">this workshop</a> I made!</small>
            <TerminalBlock
                initialText={
                    `cd ../frontend\n` +
                    `python3 -m venv chatenv \n` +
                    `source chatenv/bin/activate\n` +
                    `pip install -r requirements.txt\n` +
                    `python app.py`}
                language="bash"
            />

            <p className="mt-2">Flask is now running at: http://localhost:5000/chat :)</p>

            <h4>Knowledge Base and System Prompts</h4>
            <p>As can be seen below, there really is no magic in what we did. We simply set up a .txt file (which I saved into a variable called knowledge_base) with questions and answers related
                to the AI Club that I had the Vice President, Faris, generate. I then had the model refer to these as a basis for what it knows. Take a look:
            </p>
            <img src={KB} alt={"AWS Agent"} className="ws3-kb-image" />

            <p>While, in the industry, there may be lots more information or sophistication than what we did here, the principle still stands! If you'd like to check out
                an industry tool, check out <a href="https://aws.amazon.com/bedrock/knowledge-bases/" target="_blank"
                    rel="noopener noreferrer">AWS Bedrock's Knowledge Bases</a>.
            </p>

            <h4>Final Remarks</h4>
            <p>Everything is now up and running. Interact with the chatbot as you wish and have fun! Please, feel free to check out the code and especially take a second
                to understand how we used the knowledge base and system prompts to tailor our chatbot to the UNLV AI and Data Science Club.
            </p>

            <p>You can find the GitHub repo for this chatbot here as well: <a href="https://github.com/SebastianYepez/UNLV_AIClub_Chatbot/" target="_blank" rel="noopener noreferrer">https://github.com/SebastianYepez/UNLV_AIClub_Chatbot/</a></p>

            <h5>More Resources</h5>

            <p>Here are some more resources you might be interested in exploring!</p>
            <ul>
                <li>Explore more models on HuggingFace: <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">https://huggingface.co/</a></li>
                <li>Learn more about LMStudio: <a href="https://medium.com/@researchgraph/what-is-lm-studio-ca2e60766364" target="_blank" rel="noopener noreferrer">https://medium.com/@researchgraph/what-is-lm-studio-ca2e60766364</a></li>
                <li>More about Quantization: <a href="https://huggingface.co/docs/optimum/en/concept_guides/quantization" target="_blank" rel="noopener noreferrer">https://huggingface.co/docs/optimum/en/concept_guides/quantization</a></li>
                <li>Even more about Quantization: <a href="https://medium.com/@florian_algo/model-quantization-1-basic-concepts-860547ec6aa9" target="_blank" rel="noopener noreferrer">https://medium.com/@florian_algo/model-quantization-1-basic-concepts-860547ec6aa9</a></li>
                <li>Explore HuggingFace Transformers: <a href="https://huggingface.co/blog/gptq-integration" target="_blank" rel="noopener noreferrer">https://huggingface.co/blog/gptq-integration</a></li>
                <li>A Guide to Knowledge Bases: <a href="https://www.zendesk.com/service/help-center/ai-knowledge-base/" target="_blank" rel="noopener noreferrer">https://www.zendesk.com/service/help-center/ai-knowledge-base/</a></li>
                <li>Writing Effective System Prompts: <a href="https://www.freecodecamp.org/news/how-to-write-effective-prompts-for-ai-agents-using-langbase/" target="_blank" rel="noopener noreferrer">https://www.freecodecamp.org/news/how-to-write-effective-prompts-for-ai-agents-using-langbase/</a></li>
                <li>Another way to run LLMs locally: <a href="https://python.langchain.com/docs/integrations/llms/llamacpp" target="_blank" rel="noopener noreferrer">https://python.langchain.com/docs/integrations/llms/llamacpp</a></li>

            </ul>

        </WorkShopLayout >
    );
};

export default WS3_Agent;