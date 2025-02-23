import React from "react";
import WorkshopLayout from "../components/WS_Layout";
import WorkshopOverview from "../components/WS_Overview";
import CollapsibleSection from "../components/CollapsibleSection";
import "../styles/ws_styles/ws1.css";
import TerminalBlock from "../components/Terminal";
import JupyterCell from "../components/JupyterCell";
import { Link } from "react-scroll";

// Images
import openTerm from "../data/ws_resources/ws1resources/openterm.png"
import myEnv from "../data/ws_resources/ws1resources/myenv.png"
import jupCell from "../data/ws_resources/ws1resources/jup_cell.png"
import jupExt from "../data/ws_resources/ws1resources/jup_ext.png"
import selKern from "../data/ws_resources/ws1resources/selectkern.png"

// Resources

const summaryPoints = [
    "Configure Python and learn to set up Virual Environments",
    "Learn how to install and configure Jupyter Notebook in VS Code",
    "Run Python scripts inside VS Code's interactive window"
];

const resources = [
    { name: "Adding a venv as a Jupyter Kernel - Commands", file: "ws1/setup_venv.txt" }
];

const WS1_VSJup = () => {
    return (
        <WorkshopLayout title="Workshop 1: VS Code + Jupyter Integration">
            <p style={{ textAlign: "center" }}>Welcome to Workshop 1! In this session, we’ll cover how to install and run Jupyter Notebooks in your
                VSCode.</p>
            <WorkshopOverview summaryPoints={summaryPoints} resources={resources} />

            <section className="PythonInstallation">
                <h4> Python Installation Guide </h4>
                <p>First thing's first - do you have Python and VS Code installed?</p>
                <div className="container collapse-section">

                    <CollapsibleSection title="What is VS Code?">
                        <h5> What is VS Code? </h5>
                        <p>Visual Studio Code (VS Code) is a popular IDE (Integrated Development Environment) devloped by Microsoft that can be used for a variety
                            of programming languages. To install VS Code, please visit <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                                https://code.visualstudio.com/</a>  - you won't regret it! (not sponsored)
                        </p>
                    </CollapsibleSection>

                    <CollapsibleSection title="What is Python?">
                        <h5> What is Python? </h5>
                        <p> Python is a high-level, general-purpose programming language. Some uses cases involve data science, web programming, and scripting.
                            It is often referred to as more beginner-friendly because of its simpler syntax, and differs from other languages like Java and C++
                            by omitting characters like ";" and blocks wrapped in {"\"{\""} and {"\"}\""} from the syntax. Instead, Python relies on indentation. Python also
                            utilizes <a href="https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages" target="_blank" rel="noreferrer">
                                dynamic typing</a>. This means type declarations are not a thing in Python - below is an example. </p>

                        <span className="langName">Language: C++</span><br />
                        <code>int x = 5;</code>
                        <br />
                        <span className="langName">Language: Python</span><br />
                        <code>x = 5</code>

                        <br />
                        <p>Learn more about Python here: <a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noreferrer">Python For Beginners</a> </p>
                    </CollapsibleSection>

                    <CollapsibleSection title="Why not PyCharm?">
                        <h5> Why not PyCharm? </h5>
                        <p>PyCharm is another popular IDE, and it was devloped by JetBrains SPECIFICALLY for developing in Python. But, while it is great for working with
                            Python and managing virtual environments and keeping your projects separate - the free version <i>does not support Jupyter Notebooks</i>!
                            Luckily, as UNLV students, we can apply for their Educational License <a href="https://www.jetbrains.com/community/education/#students" target="_blank" rel="noreferrer">
                                here</a>, but you have to renew yearly which is a hassle. </p>
                        <p>
                            So, while we used PyCharm for our Python Basics Workshop back in November 2024, I would recommend using VSCode going forward because of its lightweight package,
                            flexibility, and customizability.
                        </p>
                        <p>
                            PyCharm is still an amazing tool to get used to learning Python - and JetBrains even offers <a href="https://www.jetbrains.com/pycharm-edu/" target="_blank"
                                rel="noreferrer"> courses</a>!
                        </p>
                    </CollapsibleSection>
                </div>
                <div className="container mt-4">
                    <h5> How to Check if You Already Have Python </h5>

                    <p>Good News!! Python comes <b>pre-installed in modern Linux and MacOS Operating Systems</b>, so if you have a Mac or Linux-based
                        machine, you're good to go!
                    </p>

                    <p> The neat thing about Python (and most other packages), is that it will tell you whether or not you have it installed!</p>

                    <CollapsibleSection title="How to Open a Terminal in VS Code">
                        <div className="container collapse-section">

                            <h5>How Do I Open a Terminal in VS Code?</h5>
                            <p>The terminal, also referred to as the Command Line Interface (CLI), is text-based interface that allows you to run commands
                                on your machine. To open it:
                            </p>
                            <ol>
                                <li>Open VS Code</li>
                                <li>Navigate to "Terminal" tab</li>
                                <li>Click "New Terminal"</li>
                            </ol>
                            <div>
                                <img src={openTerm} alt={"Depiction of Opening a Terminal"} className="ws1-openterm-image" />
                            </div>
                            <br />

                            <p>Quick Shortcut for Mac Users: <i>control</i> + '`' <br /> &nbsp;
                                - brings up the current terminal</p>
                        </div>
                    </CollapsibleSection>

                    <span>Simply open a terminal window - then enter: </span>
                    <code>python --version</code>
                    <span>or, if that doesn't work, try: </span>
                    <code>python3 --version</code>

                    <br />

                    <CollapsibleSection title="I Want to Update My Python Version (Homebrew)">
                        <h5>How Do I Manage Python on My Machine?</h5>
                        <p>As I mentioned above, Python is pre-installed on MacOS and Linux machines. But, a software called
                            Homebrew allows you to manage softwares on your OS! If you would like to learn more, check this page out:
                        </p>
                        <a href="https://brew.sh/" target="_blank" rel="noreferrer">https://brew.sh/</a>
                        <br />
                        <br />
                        <p>
                            Please note that this will get a separate instance of Python on your machine, one which you have more control over.
                            My tutorials will not use Homebrew. Only the Python installed on our machines along with pip (package install for Python),
                            so install Homebrew is not necessary. However, my job is to teach you guys - so I thought I'd mention it!
                        </p>

                    </CollapsibleSection>

                    <CollapsibleSection title="What if I Have a Windows?">
                        <div className="container collapse-section">

                            <h5> What if I Have a Windows? </h5>
                            <p> Sorry, you're out of luck :/ . . . is what I woulddd say if WSL (<a href="https://learn.microsoft.com/en-us/windows/wsl/about" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a>) didn't exist!
                                I personally have a Mac, so this (and all subsequent) workshops will be targeted for Mac & Linux users specifically.
                            </p>
                            <div className="container">
                                <h6>Why Do I Need WSL?</h6>
                                <p>Both MacOS and Linux are based off the Unix Operating System, hence why they are referred to as "Unix-like" Operating Systems.
                                    Windows, on the other hand, is not a Unix-like OS. But, they have recently allowed Windows users to run Linux natively through WSL,
                                    meaning all of the terminal prompts I run will be the same (or similar) for you if you get WSL!
                                </p>
                                <p> To install WSL, please follow the directions here: <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/windows/wsl/install</a></p>
                                <span>P.S. it is not too hard. In PowerShell, simply run:</span>
                                <code>wsl --install</code>

                                <br />
                                <p>Huzzah! Now you have WSL. Get it up and running, then run the following commands:</p>
                                <span>Update package lists (ensures latest versions)</span>
                                <code>sudo apt update</code>
                                <span>Install Python:</span>
                                <code>sudo apt install python3 </code>
                                <span>Check to see if you have Python successfully installed:</span>
                                <code>python3 --version</code>
                                <span>Install pip (package installer for Python)</span>
                                <code>sudo apt install python3-pip</code>
                            </div>

                            <br />

                            <h5> I Don't Want to/Can't Get WSL </h5>
                            <p> No worries. You can download Python directly on Windows. The only caveat (and it's a big one) is that
                                virtual environment commands will look slightly different, so some aspects of my tutorials won’t be directly applicable to you. </p>
                            <p>
                                Here is a tutorial on how to download Python on Windows: <a href="https://www.geeksforgeeks.org/how-to-install-python-on-windows/" target="_blank" rel="noreferrer">https://www.geeksforgeeks.org/how-to-install-python-on-windows/</a>
                            </p>
                        </div>
                    </CollapsibleSection>
                </div>
                <p>Great! Now that we have both VS Code and Python installed, we can get to the fun stuff.</p>
            </section>

            <section className="VirtEnvSection">
                <h4> Virtual Environments 101 </h4>
                <p>One of the best parts about Python is that it is open-source, meaning anyone can contribute to it. Because of this, many people
                    have! There are thousands of Python libraries for many different purposes. However, this comes with a caveat.
                </p>
                <div className="container mt-4">
                    <h5> What are Virtual Environments (venv)? </h5>
                    <p> Different Python projects will require different libraries and packages. Sometimes, those libraries
                        can conflict and/or sometimes projects require certain libraries of particular versions. This can be quite a hassle to manage, and can be avoided by
                        creating a new environment for each project.
                    </p>
                    <p>
                        This strategy provides a separation of concerns, making each project's environment independent of each other. This is what PyCharm does, but
                        since it isn't too complicated to do manually I still prefer VS Code.
                    </p>

                    <h5> How to Create a Virtual Environment </h5>
                    <p>Creating a venv is very simple now that we have Python. Here's how:</p>
                    <ol>
                        <li>
                            Open a terminal and make a directory (folder) for your project.
                        </li>
                        <span>(Note: If you copy and paste these commands into your terminal, ensure to remove the comments '# ...')</span>
                        <TerminalBlock
                            initialText={`mkdir AI_Project \t# make directory "AI_Project"\n` +
                                `cd AI_Project \t\t# change into directory "AI_Project"\n`}
                            language="bash"
                        />
                        <li>
                            Create a virtual environment.
                        </li>
                        <TerminalBlock initialText={`python3 -m venv myenv \t# makes a venv with name 'myenv'`}
                            language="bash" />

                        <li>
                            Activate your new virtual environment.
                        </li>
                        <TerminalBlock initialText={`source myenv/bin/activate \t# make sure to replace 'myenv' with the name of your venv`}
                            language="bash" />
                    </ol>
                    <CollapsibleSection title="What about Windows?">
                        <h4>How Do I Make a venv in Windows?</h4>
                        <p>Because I'm super nice and awesome, here are the commands to create and activate a Virtual
                            Environment in Windows! (NOTE: these are <b>NOT</b> for you if you are using WSL! WSL uses bash, so take a look
                            at the commands above)
                        </p>
                        <TerminalBlock initialText={`python -m venv myvenv \t\t# creates an venv named myvenv\n`
                            + `myvenv\\Scripts\\Activate \t# activates the venv`} language="powershell" />
                    </CollapsibleSection>
                    <p>Boom! Now you should have a folder named 'myenv'! (Or whatever you named it)</p>
                    <img src={myEnv} alt={"myenv folder in VS Code"} className="ws1-myenv-image" />
                </div>
                <br />
                <h5> How to Deactivate Your Virtual Environment </h5>
                <p>To deactivate the Virtual Environment, run the following command (works for both bash and powershell)</p>
                <code className="mb-2">deactivate</code>
                {/* <TerminalBlock initialText={"deactivate"} language="bash" /> */}
                <p>Now you know how to create a venv using Python - use this knowledge to create custom environments for your different
                    Python projects!
                </p>

            </section>
            <section className="JupyterNBSetup">
                <h4> Create a Jupyter Notebook </h4>
                <p>Next up - let's set up a Jupyter Notebook in our folder!</p>

                <div className="container mt-4">
                    <CollapsibleSection title="What is a Jupyter Notebook?">
                        <h4>What is a Jupyter Notebook?</h4>
                        <p>A Jupyter Notebook is an interactive computing environment that allows users to write and execute code in small, manageable cells.
                            It operates using kernels, which run the code and return outputs.
                        </p>
                        <img src={jupCell} alt={"Jupyter Notebook Cell"} className="ws1-jupcell-image" />
                        <br />
                        <br />

                        <p>We will be using Jupyter Notebook in our Workshops for this reason - it allows us to display snippets of
                            code easily!
                        </p>
                        <p>If you would like to learn more and try a demo, please visit: <a href="https://jupyter.org/try-jupyter/lab/" target="_blank" rel="noreferrer">
                            https://jupyter.org/try-jupyter/lab/</a></p>
                    </CollapsibleSection>

                    <p> A Jupyter Notebook (.ipynb file) allows us to execute our code in small cells.
                    </p>
                    <JupyterCell
                        code={`import numpy as np\n`
                            + `\tnp.array([1, 2, 3])`}
                        output={`array([1, 2, 3])`}
                    />
                    <h5 className="mb-3 mt-4"> How to Set Up a Jupyter Notebook </h5>

                    <p>To set this up in VS Code, let's follow the next couple steps:</p>

                    <ol>
                        <li>Install the "Jupyter" extension by Microsoft in VSCode</li>
                        <div className="container mt-3 mb-3"> <img src={jupExt} alt={"Jupyter Extension on VS Code"} className="ws1-jupext-image" />
                        </div>
                        <li>In your terminal, run the command: </li>
                        <div className="container">
                            <TerminalBlock initialText={"pip install jupyter ipykernel \t # installs jupyter and ipykernel packages"} />
                        </div>
                        <li>Then, run the command:</li>
                        <div className="container">
                            <TerminalBlock initialText={'python -m ipykernel install --user --name=myenv --display-name "Python (myenv)"' +
                                `\n# make sure to replace myenv with the name of your venv folder!`
                            } />
                            <p> That's it for the terminal commands!</p>
                            <p>
                                If you would like to keep a record of these commands, please download the file
                                under <Link to="workshop-resources" smooth={true} duration={100} offset={-300} className="scroll-link">
                                    Workshop Resources
                                </Link>.
                            </p>

                        </div>
                        <li>Make a new file called test.ipynb</li>
                        <br />
                        <li>In the upper right of your test.ipynb file, click "Select Kernel" then select your virtual environment.</li>
                        <div className="container"><p> Note: You may have to restart VS Code once or twice to see your venv show up.</p>
                            <img src={selKern} alt={"Selecting Kernel in .ipynb file"} className="ws1-selKern-image" /></div>
                        <br />
                        <li>Create a Code Cell "+ Code" and type the following: </li>
                        <div className="container">
                            <JupyterCell
                                code={`print("Hello World)`}
                                output={`Hello World`}
                            />
                            <p>To run a code cell - click the play button or press "Shift + Enter." You should see the above output.</p>
                        </div>
                    </ol>
                    <h4>We did it!</h4>
                    <p>You now have a functional Jupyter Notebook in VS Code!</p>
                    <p>If you would like to create a simple notebook that visualizes images in a dataset - follow along in the next workshop!</p>
                </div>
            </section >

        </WorkshopLayout >
    );
};

export default WS1_VSJup;
