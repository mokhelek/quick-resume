import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  header: {
    backgroundColor: '#213e60',
    color: '#ffffff',
    padding: '40 40 30 40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16 32',
  },
  contactItem: {
    fontSize: 10,
    color: '#ffffff',
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginLeft: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  twoColumn: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingTop: 24,
  },
  leftColumn: {
    width: '40%',
    paddingRight: 24,
  },
  rightColumn: {
    width: '60%',
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#6b7280',
    marginBottom: 12,
  },
  achievementItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  achievementBullet: {
    width: 6,
    height: 6,
    backgroundColor: '#213e60',
    borderRadius: 3,
    marginTop: 5,
    marginRight: 8,
  },
  achievementText: {
    fontSize: 9,
    color: '#374151',
    flex: 1,
  },
  educationItem: {
    marginBottom: 16,
  },
  institution: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  degree: {
    fontSize: 10,
    color: '#213e60',
    marginBottom: 2,
  },
  educationDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 6,
  },
  skillBullet: {
    width: 6,
    height: 6,
    backgroundColor: '#213e60',
    marginRight: 6,
  },
  skillText: {
    fontSize: 9,
    color: '#111827',
  },
  certificationItem: {
    marginBottom: 10,
  },
  certificationName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  certificationDetails: {
    fontSize: 9,
    color: '#6b7280',
  },
  profileText: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 24,
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  position: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
  },
  experienceDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  company: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#213e60',
    marginBottom: 6,
  },
  description: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.5,
  },
});

export const CreativeBoldTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Contact Info and Photo */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>{data.personal.name}</Text>
            <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
            
            <View style={styles.contactGrid}>
              <Text style={styles.contactItem}>{data.personal.phone}</Text>
              <Text style={styles.contactItem}>{data.personal.email}</Text>
              {data.personal.website && (
                <Text style={styles.contactItem}>{data.personal.website}</Text>
              )}
              {data.personal.linkedin && (
                <Text style={styles.contactItem}>{data.personal.linkedin}</Text>
              )}
            </View>
          </View>
          
          {data.personal.photo && (
            <View style={styles.photoContainer}>
              <Image src={data.personal.photo} style={styles.photo} />
            </View>
          )}
        </View>

        {/* Two Column Layout */}
        <View style={styles.twoColumn}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Key Achievements */}
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.sectionTitle}>KEY ACHIEVEMENTS</Text>
              <View style={{ marginTop: 8 }}>
                <View style={styles.achievementItem}>
                  <View style={styles.achievementBullet} />
                  <Text style={styles.achievementText}>
                    Generated $30M in new sales revenue by identifying and securing strategic partnerships
                  </Text>
                </View>
                <View style={styles.achievementItem}>
                  <View style={styles.achievementBullet} />
                  <Text style={styles.achievementText}>
                    Increased client portfolio by 40% through targeted outreach and networking efforts
                  </Text>
                </View>
                <View style={styles.achievementItem}>
                  <View style={styles.achievementBullet} />
                  <Text style={styles.achievementText}>
                    Led cross-functional teams to develop marketing strategies resulting in 15% revenue growth
                  </Text>
                </View>
              </View>
            </View>

            {/* Education */}
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
              ))}
            </View>

            {/* Skills */}
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                  <View key={index} style={styles.skillItem}>
                    <View style={styles.skillBullet} />
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Certifications */}
            {data.qualifications.length > 0 && (
              <View>
                <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
                {data.qualifications.map((qual, index) => (
                  <View key={index} style={styles.certificationItem}>
                    <Text style={styles.certificationName}>{qual.name}</Text>
                    <Text style={styles.certificationDetails}>
                      {qual.issuer} • {qual.date}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Profile */}
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.sectionTitle}>PROFILE</Text>
              <Text style={styles.profileText}>{data.personal.summary}</Text>
            </View>

            {/* Experience */}
            <View>
              <Text style={styles.sectionTitle}>EXPERIENCE</Text>
              {data.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <Text style={styles.experienceDate}>
                      {exp.startDate} - {exp.endDate}
                    </Text>
                  </View>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.description}>{exp.description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};