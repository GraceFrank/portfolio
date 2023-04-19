import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { GoTriangleRight } from "react-icons/go";

const companies = [
  {
    name: "Hark",
    date: "Jul 2022 - Present",
    achievments: [
      "Development of the hark web application, API and mobile application.",
      "Successfully developed a proof of concept mobile application that raised over 1.5 million USD in funding for Hark.",
      "Designed and developed the Harkweb application, which resulted in attracting over 18 new customers to Hark.",
      "Created the Client Workflow Application, which enables Hark's clients to customize their workflow, increasing Hark's marketability.",
      "Significantly reduced user drop-off rates by 33% through the integration of session replay and user behaviour analytic tools into the Hark web application.",
      "Developed the Hark Script, allowing customers to embed Hark services within their websites, which is currently being used by approximately 30% of Hark's customers.",
    ],
    role: "Senior Frontend Engineer",
    skills:
      "Recoil · Google Cloud Platform (GCP) · HTML5 · JavaScript · Node.js · React.js · Cascading Style Sheets (CSS) · TypeScript",
  },
  {
    name: "Afriex",
    date: "Dec 2021 - Jun 2022 · 7 mos",
    achievments: [
      "Implement Figma Designs of Web Applications Using React",
      "Build User Interface of Internal tools",
      "Add features to back end API",
    ],
    role: "Software Engineer",
  },
  {
    name: "Centricity",
    date: "Oct 2020 - Dec 2021",
    achievments: [
      "Build Client Subscription Management Application ",
      "Added Endpoints to Admin Tools API (Python/Django)",
      "Wrote Cloud Function To Query Bigquery and generate New Tables Weekly(GCP Pub/Sub, GCP Cloud Function, Bigquery, SQL, Python)",
      "Set up Looker Instance and Config, Build Looker Models and measures, Implemented Hub and Spoke model in Looker( Looker, LookML, liquid)",
      "Built BI analytics Dashboard visualisation( Looker, LookML, liquid)",
      "Code Review, System Design",
    ],
    role: "Software Engineer",
  },
  {
    name: "Interswitch",
    date: "Aug 2019 - Oct 2020",
    endDate: "Feb 2022",
    achievments: [
      " Modify Existing Java Enterprise applications to add new features and fix bugs.",
      "Scale and improve the performance of existing applications",
      "Build Web Applications using React/Redux and Setup the deployment pipelines",
    ],
    role: "Software Engineer",
  },
  {
    name: "Terragon",
    date: "May 2019 - Aug 2019 · 4 mos",
    endDate: "Feb 2022",
    achievments: [
      "Used Vanilla Javascript to develop a client-side script for tracking conversions such as signup, purchases, etc from different clients websites.",
      "Contributed to an API to log and aggregate all conversions sent from the client-side with Technologies such as Node.Js, Elasticsearch, Queueing System and Docker.",
      "Rewrote endpoints for an API that uploads application files to AWS S3 buckets.",
      "Worked closely with the agile development team to develop, test and maintain software applications. ",
    ],
    role: "Software Engineer",
  },
];

export const ExperienceSection = () => {
  const purple = useColorModeValue("purple.600", "purple.200");

  return (
    <Stack id="experience" gap={5} py={20} height={"100vh"} justify={"center"}>
      <Tabs orientation="vertical" colorScheme="purple">
        <TabList>
          {companies.map((company) => (
            <Tab justifyContent={"start"} key={company.name}>
              {company.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels minH={400}>
          {companies.map((company) => (
            <TabPanel key={company.name}>
              <Stack>
                <Heading as="h3" size="md">
                  {company.role}{" "}
                  <Text color={purple} as="span">
                    @ &nbsp;{company.name}
                  </Text>
                </Heading>
                <Text color="gray.500">{company.date}</Text>

                {company.achievments.map((achievement, index) => (
                  <div data-aos="fade-up">
                    <HStack key={index}>
                      <Icon color={purple} as={GoTriangleRight} />{" "}
                      <Text>{achievement}</Text>
                    </HStack>{" "}
                  </div>
                ))}
              </Stack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
