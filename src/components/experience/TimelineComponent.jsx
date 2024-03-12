import { TimelineOppositeContent } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { Content } from "../about/styles";
import { experiences } from "./constants";
import { ExperienceBox, Tag } from "./styles";

export default function TimelineComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  console.log(matches);
  return (
    <Timeline
      sx={{ overflow: "scroll" }}
      position={matches ? "alternate" : "right"}
    >
      {experiences.map((experience) => (
        <TimelineItem
          sx={{ "::before": { content: !matches ? "none" : '""' } }}
        >
          {matches && (
            <TimelineOppositeContent
              color="#007339"
              sx={{ fontWeight: "bold", width: "10%" }}
            >
              {experience.to}
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ overflow: "scroll" }}>
            <ExperienceBox>
              <Content
                style={{
                  fontWeight: "bold",
                  color: "#50C878",
                  fontSize: "2vh",
                }}
              >
                {experience.title}
              </Content>
              <Content>{experience.company}</Content>

              <Content sx={{ lineHeight: "4vh" }}>
                {experience.description}
              </Content>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "15px",
                  flexWrap: "wrap",
                }}
              >
                {experience.skills.map((skill) => (
                  <Tag>{skill}</Tag>
                ))}
              </div>
            </ExperienceBox>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
