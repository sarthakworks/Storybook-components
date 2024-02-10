import "../../styles/main.scss";
import React, { useState, useEffect } from 'react';
import TopnavMobile from "./sub/TopnavMobile";
import TopnavDesktop from "./sub/TopnavDesktop";

export default {
    title: "Components/Core/topnavbar",
    parameters: { layout: "fullscreen" },
    tags: [],
};

export const Primary = (args) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (<><header>
        {isMobile ? <TopnavMobile /> : <TopnavDesktop />}
    </header>
        <main>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus. Pharetra diam sit amet nisl suscipit adipiscing. Vitae tortor condimentum lacinia quis vel eros donec. Sed vulputate mi sit amet mauris commodo. Rhoncus est pellentesque elit ullamcorper dignissim. Consequat semper viverra nam libero justo laoreet sit amet cursus. Tincidunt dui ut ornare lectus sit amet. Diam phasellus vestibulum lorem sed risus ultricies. Turpis tincidunt id aliquet risus. Dolor purus non enim praesent. Enim sed faucibus turpis in eu mi bibendum. Commodo viverra maecenas accumsan lacus vel facilisis. Risus nullam eget felis eget nunc lobortis. Ullamcorper a lacus vestibulum sed arcu non odio. Tincidunt tortor aliquam nulla facilisi cras fermentum.

            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae proin sagittis nisl rhoncus mattis rhoncus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. At tellus at urna condimentum mattis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Odio pellentesque diam volutpat commodo sed egestas egestas. Consectetur a erat nam at. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Id porta nibh venenatis cras sed felis eget. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Morbi tristique senectus et netus et malesuada fames ac. Nisl pretium fusce id velit ut tortor. Pellentesque dignissim enim sit amet venenatis urna.

            Vel eros donec ac odio. Vitae suscipit tellus mauris a diam. Tincidunt nunc pulvinar sapien et ligula. Sollicitudin ac orci phasellus egestas. Sapien pellentesque habitant morbi tristique senectus et netus et. Tincidunt arcu non sodales neque sodales ut. Sit amet tellus cras adipiscing. Sit amet commodo nulla facilisi nullam vehicula ipsum. Magna sit amet purus gravida quis blandit. Lacus sed viverra tellus in hac habitasse platea dictumst. Mi bibendum neque egestas congue. Fringilla ut morbi tincidunt augue interdum. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Non curabitur gravida arcu ac tortor. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Tortor pretium viverra suspendisse potenti nullam. Risus at ultrices mi tempus imperdiet nulla. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.

            Quisque non tellus orci ac. Dolor magna eget est lorem. Egestas purus viverra accumsan in nisl nisi scelerisque. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Feugiat vivamus at augue eget arcu dictum varius duis. Praesent tristique magna sit amet purus gravida quis blandit. Nec nam aliquam sem et tortor consequat id. Semper auctor neque vitae tempus quam pellentesque nec nam. Est ullamcorper eget nulla facilisi etiam dignissim diam. Etiam sit amet nisl purus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Aliquet nec ullamcorper sit amet risus. Etiam sit amet nisl purus in mollis nunc. A arcu cursus vitae congue mauris rhoncus aenean. Lectus proin nibh nisl condimentum id venenatis.

            Odio pellentesque diam volutpat commodo sed. Semper eget duis at tellus at urna condimentum mattis. Est sit amet facilisis magna etiam tempor orci. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Parturient montes nascetur ridiculus mus. Commodo elit at imperdiet dui accumsan. Sit amet risus nullam eget felis. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Amet est placerat in egestas erat imperdiet sed. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tincidunt ornare massa eget egestas purus. Platea dictumst vestibulum rhoncus est. Nec sagittis aliquam malesuada bibendum arcu. Integer enim neque volutpat ac tincidunt vitae semper. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Scelerisque varius morbi enim nunc. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus.

            Risus nullam eget felis eget nunc lobortis mattis. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Egestas sed sed risus pretium quam vulputate. Ipsum nunc aliquet bibendum enim. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Mi bibendum neque egestas congue quisque. Eu mi bibendum neque egestas congue quisque egestas diam. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Sed vulputate odio ut enim. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Dolor sit amet consectetur adipiscing elit ut. Scelerisque felis imperdiet proin fermentum leo vel orci. Sollicitudin tempor id eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Eget magna fermentum iaculis eu non. Nibh tellus molestie nunc non blandit massa enim. Sit amet est placerat in egestas. Duis convallis convallis tellus id interdum velit laoreet id. Lorem donec massa sapien faucibus et.

            Ut tortor pretium viverra suspendisse. Faucibus pulvinar elementum integer enim neque. Id diam vel quam elementum pulvinar. Nullam ac tortor vitae purus faucibus. Nunc mattis enim ut tellus elementum sagittis vitae. Eu ultrices vitae auctor eu augue ut lectus. Nunc sed velit dignissim sodales ut eu sem integer. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Mauris pellentesque pulvinar pellentesque habitant. Justo laoreet sit amet cursus sit amet dictum sit. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Tristique sollicitudin nibh sit amet commodo. Tincidunt lobortis feugiat vivamus at augue. Fusce ut placerat orci nulla pellentesque dignissim enim. Netus et malesuada fames ac turpis egestas. Tellus id interdum velit laoreet id donec ultrices. Libero justo laoreet sit amet cursus sit. Maecenas pharetra convallis posuere morbi leo urna molestie.

            Lectus arcu bibendum at varius vel pharetra vel turpis. Mauris augue neque gravida in fermentum et. Aliquet enim tortor at auctor urna nunc. Porttitor rhoncus dolor purus non. Eu scelerisque felis imperdiet proin fermentum leo. Ac ut consequat semper viverra nam libero justo laoreet sit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Augue mauris augue neque gravida in fermentum et sollicitudin. Ante in nibh mauris cursus mattis molestie. Tristique risus nec feugiat in fermentum posuere.

            Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Integer vitae justo eget magna fermentum iaculis eu non diam. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Faucibus ornare suspendisse sed nisi lacus sed. Urna molestie at elementum eu. Sapien faucibus et molestie ac feugiat sed lectus. Nunc aliquet bibendum enim facilisis gravida neque. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Urna et pharetra pharetra massa massa ultricies. Id interdum velit laoreet id donec ultrices. Mi quis hendrerit dolor magna. Mattis enim ut tellus elementum sagittis vitae et. Aliquam sem fringilla ut morbi tincidunt augue. Congue eu consequat ac felis. Est ultricies integer quis auctor elit sed vulputate mi. Sed tempus urna et pharetra pharetra. Ut lectus arcu bibendum at. Tortor pretium viverra suspendisse potenti nullam ac tortor. Ante in nibh mauris cursus mattis molestie a iaculis. Viverra nibh cras pulvinar mattis nunc sed blandit.
        </main>

    </>);

};
