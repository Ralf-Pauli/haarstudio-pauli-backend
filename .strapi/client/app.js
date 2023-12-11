/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import googleMaps from "@amicaldo/strapi-google-maps/strapi-admin";
import documentation from "@strapi/plugin-documentation/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import cloudflarePages from "strapi-plugin-cloudflare-pages/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,
  plugins: {
    "google-maps": googleMaps,
    documentation: documentation,
    "users-permissions": usersPermissions,
    "cloudflare-pages": cloudflarePages,
    "multi-select": multiSelect,
  },
});
