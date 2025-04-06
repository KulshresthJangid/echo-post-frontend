import { Integration } from "@/enums/Integration.enum";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const getIconByIntegrationName = (
  integration: Integration
): (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }) | null => {
  switch (integration) {
    case Integration.INSTAGRAM:
      return InstagramIcon;
    default:
      return null;
  }
};
