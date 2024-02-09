import "../../styles/main.scss";
export default {
    title: "Components/Core/themeSwitcher",
    parameters: { layout: "fullscreen" },
    tags: [],
};

export const Primary = (args) => {

    function handleTheme() {
        document.body.classList.toggle("dark");
    }

    return (
        <>
            <div>
                <div className="cmp-button-text-variation1">
                    <h2 className="cmp-button__text">Primary</h2>
                </div>
                <div className="button btn--primary">
                    <button onClick={handleTheme} className="cmp-button" type="button">
                        <span className="cmp-button__text">Switch Dark Mode</span>
                    </button>
                </div>
            </div>
        </>
    );
};
