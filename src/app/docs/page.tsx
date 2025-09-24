import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle>Documentation</DocsTitle>
      <DocsDescription>
        Comprehensive documentation for the wheels4wheels project
      </DocsDescription>
      <DocsBody>
        <p>Welcome to the wheels4wheels documentation. Here you can find detailed information about:</p>
        <ul>
          <li><a href="/docs/Attributes_on_OpenStreetMaps">Attributes on OpenStreetMaps</a></li>
          <li><a href="/docs/OpenStreetMap_Editors">OpenStreetMap Editors</a></li>
          <li><a href="/docs/Photo-Telemetry_File_Correlation">Photo-Telemetry File Correlation</a></li>
          <li><a href="/docs/Surface_Smoothness_Analysis">Surface Smoothness Analysis</a></li>
          <li><a href="/docs/incline_and_curbs">Incline and Curbs</a></li>
          <li><a href="/docs/wheels4wheels_for_HoC">wheels4wheels for HoC</a></li>
        </ul>
      </DocsBody>
    </DocsPage>
  );
}

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive documentation for the wheels4wheels project",
};
