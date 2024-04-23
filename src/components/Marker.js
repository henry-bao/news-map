import React from 'react';
import { Tooltip } from 'react-tooltip';

function Marker({ children, feature }) {
    return (
        <>
            <button className="marker" data-tooltip-id="marker-tooltip" data-tooltip-place="top">
                {children}
            </button>
            <Tooltip id="marker-tooltip" openOnClick clickable>
                <div class="tooltip">
                    <p class="tooltip-title">Lorem Ipsum</p>
                    <p class="tooltip-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    <iframe
                        class="tooltip-video"
                        src="https://www.youtube.com/embed/sm757r-pI-4?si=x48uTLNfSXONEYEM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </Tooltip>
        </>
    );
}

export default Marker;
