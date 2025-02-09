/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { View } from "./view";
import { ConfigView } from "./config-view";
import { StageView } from "./stage-view";
import { SidebarView } from "./sidebar-view";

var view: View;

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get("view") || "stage";

    let view: View;

    switch (viewParam.toLowerCase()) {
        case "config":
            view = new ConfigView();
            break;
        case "stage":
            view = new StageView();
            break;
        default:
            view = new SidebarView();
            break;
    }

    view.start();
}

