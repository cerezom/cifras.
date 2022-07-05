import React, { useEffect } from "react";
import { GobantDrawerComponent } from '@aotalvaros/packege-drawer';
import { useDispatch, useSelector } from "react-redux";
import {  Dispatch, RootState } from "main/shared/state/store";
import { ContentDrawerState } from "main/entities/contentDrawer/domain/model/content-drawer-state";
import { Outlet } from "react-router";

import "../../app/styles/index.scss"

const ContentDrawerPage: React.FC = ()  => {
    
    const dispatch = useDispatch<Dispatch>();
    const contentDrawer: ContentDrawerState = useSelector((state: RootState) => state.contentDrawer);

    useEffect(() => {
        dispatch.contentDrawer.obtenerInformacionDrawer();
    }, [dispatch.contentDrawer])

    return (
        <div>
            {
                contentDrawer.informacionContentDrawer.content && (
                    <>
                        <GobantDrawerComponent
                            title={contentDrawer.informacionContentDrawer.title}
                            content={contentDrawer.informacionContentDrawer.content}
                            showIconButtonMenu={true}
                            drawerStyle={"drawer_components_new_style"}
                            drawerContentStyle={"drawer_custom_content_new_style"}
                        />                           
                        <section>
                            <Outlet/>
                        </section>
                    </>
                )
            }

        </div>
    )
};

export default ContentDrawerPage;
