import { Document, Page, View, Text, StyleSheet, Svg, Path } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';

// Define the SVG icons
const PhoneIcon = ({ color = '#213e60', size = 12 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);


const MailIcon = ({ color = '#213e60', size = 12 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

const GlobeIcon = ({ color = '#213e60', size = 12 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5M2 12h20"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

const LinkedinIcon = ({ color = '#213e60', size = 12 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#374151',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    marginBottom: 4,
    color: '#111827',
  },
  surname: {
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#2b7fde',
    marginBottom: 12,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    color: '#4b5563',
  },
  contactIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#213e60',
    borderBottomWidth: 1,
    borderBottomColor: '#213e60',
    borderBottomStyle: 'solid',
    paddingBottom: 4,
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 16,
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  position: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#111827',
  },
  date: {
    fontSize: 10,
    color: '#6b7280',
  },
  company: {
    fontSize: 11,
    fontWeight: 'medium',
    color: '#2b7fde',
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
  },
  educationItem: {
    marginBottom: 12,
  },
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  institution: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#111827',
  },
  degree: {
    fontSize: 11,
    color: '#2b7fde',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 10,
    color: '#111827',
  },
  certificationItem: {
    marginBottom: 8,
  },
  certificationName: {
    fontSize: 11,
    fontWeight: 'semibold',
    color: '#111827',
    marginBottom: 2,
  },
  certificationIssuer: {
    fontSize: 10,
    color: '#213e60',
    marginBottom: 2,
  },
  certificationDate: {
    fontSize: 10,
    color: '#6b7280',
  },
});

export const SingleColumnTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {data.personal.name.toUpperCase()}{' '}
            <Text style={styles.surname}>{data.personal.surname.toUpperCase()}</Text>
          </Text>
          <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
          
          {/* Contact Info */}
          <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactIcon}>
                <PhoneIcon />
              </View>
              <Text>{data.personal.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <View style={styles.contactIcon}>
                <MailIcon />
              </View>
              <Text>{data.personal.email}</Text>
            </View>
            {data.personal.website && (
              <View style={styles.contactItem}>
                <View style={styles.contactIcon}>
                  <GlobeIcon />
                </View>
                <Text>{data.personal.website}</Text>
              </View>
            )}
            {data.personal.linkedin && (
              <View style={styles.contactItem}>
                <View style={styles.contactIcon}>
                  <LinkedinIcon />
                </View>
                <Text>{data.personal.linkedin}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUMMARY</Text>
          <Text style={styles.description}>{data.personal.summary}</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.positionRow}>
                <Text style={styles.position}>{exp.position}</Text>
                <Text style={styles.date}>
                  {exp.startDate} - {exp.endDate}
                </Text>
              </View>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.description}>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationRow}>
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.date}>
                  {edu.startDate} - {edu.endDate}
                </Text>
              </View>
              <Text style={styles.degree}>{edu.degree}</Text>
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillTag}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Certifications Section */}
        {data.qualifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
            {data.qualifications.map((qual, index) => (
              <View key={index} style={styles.certificationItem}>
                <Text style={styles.certificationName}>{qual.name}</Text>
                <Text style={styles.certificationIssuer}>{qual.issuer}</Text>
                <Text style={styles.certificationDate}>{qual.date}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};