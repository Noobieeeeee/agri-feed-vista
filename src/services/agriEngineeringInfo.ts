
// Data service for Philippine Agricultural and Biosystems Engineering information

export interface AgriEngineeringInfo {
  id: string;
  title: string;
  category: 'Law' | 'Institution' | 'Program' | 'Research';
  description: string;
  content: string;
  source: string;
  sourceUrl?: string;
  relatedLinks?: Array<{ title: string; url: string }>;
}

// Collection of Philippine Agricultural and Biosystems Engineering information
export const agriEngineeringInfo: AgriEngineeringInfo[] = [
  {
    id: "ra-3927",
    title: "Republic Act No. 3927 - The Philippine Agricultural Engineering Law",
    category: "Law",
    description: "The foundational law for agricultural engineering practice in the Philippines, signed in 1964.",
    content: `
      <p>Republic Act No. 3927, also known as the Philippine Agricultural Engineering Law, was signed in 1964 and established the Board of Agricultural Engineers to regulate the practice of agricultural engineering in the Philippines.</p>
      <p>This pioneering legislation laid the groundwork for the profession's development in the country, setting standards for education, licensing, and professional practice in agricultural engineering.</p>
      <p>The law defines agricultural engineering as the application of engineering principles and techniques to agricultural operations and processes. It covers areas such as farm power and machinery, farm structures, soil and water conservation, and agricultural processing.</p>
    `,
    source: "Official Gazette of the Philippines",
    sourceUrl: "https://www.officialgazette.gov.ph/",
    relatedLinks: [
      { title: "Board of Agricultural Engineering", url: "https://www.prc.gov.ph/agricultural-and-biosystems-engineers" }
    ]
  },
  {
    id: "ra-8559",
    title: "Republic Act No. 8559 - The New Philippine Agricultural Engineering Act of 1998",
    category: "Law",
    description: "Updated law that modernized the scope of agricultural engineering practice in the Philippines.",
    content: `
      <p>Republic Act No. 8559, known as The New Philippine Agricultural Engineering Act of 1998, expanded the scope of agricultural engineering to include new technologies and methodologies that emerged since RA 3927.</p>
      <p>This law updated the definition of agricultural engineering to encompass modern practices including environmental management, agricultural waste management, agricultural mechanization, and post-harvest processing.</p>
      <p>RA 8559 also strengthened the role of the Board of Agricultural Engineers and updated the requirements for licensure and practice in line with international standards and the country's developing agricultural sector.</p>
    `,
    source: "Philippine Society of Agricultural Engineers",
    sourceUrl: "https://psae.org.ph/",
    relatedLinks: [
      { title: "Agricultural Engineering Licensure Examination", url: "https://www.prc.gov.ph/agricultural-and-biosystems-engineers" }
    ]
  },
  {
    id: "ra-10915",
    title: "Republic Act No. 10915 - Philippine Agricultural and Biosystems Engineering Act of 2016",
    category: "Law",
    description: "The most recent law governing agricultural and biosystems engineering in the Philippines.",
    content: `
      <p>Republic Act No. 10915, or the Philippine Agricultural and Biosystems Engineering Act of 2016, is the most recent legislation governing the practice of agricultural and biosystems engineering in the Philippines.</p>
      <p>This law further expanded the scope of the profession to include biosystems engineering, reflecting the evolution of the field to incorporate biological systems engineering, bioresource engineering, and bioprocess engineering.</p>
      <p>RA 10915 modernized the regulatory framework, updated educational requirements, and aligned professional standards with global practices in agricultural and biosystems engineering.</p>
      <p>The law also reinforced the role of agricultural and biosystems engineers in addressing national concerns such as food security, environmental sustainability, and agricultural industrialization.</p>
    `,
    source: "Professional Regulation Commission",
    sourceUrl: "https://www.prc.gov.ph/",
    relatedLinks: [
      { title: "Full Text of RA 10915", url: "https://www.officialgazette.gov.ph/2016/07/21/republic-act-no-10915/" }
    ]
  },
  {
    id: "psae",
    title: "Philippine Society of Agricultural Engineers (PSAE)",
    category: "Institution",
    description: "The professional organization for agricultural engineers in the Philippines, founded in 1950.",
    content: `
      <p>The Philippine Society of Agricultural Engineers (PSAE), founded in 1950, is the premier professional organization for agricultural engineers in the Philippines.</p>
      <p>PSAE's mission is to promote the advancement of agricultural engineering as a profession through continuing education, research, and advocacy. The organization regularly conducts seminars, workshops, and annual conventions to keep members updated with the latest developments in the field.</p>
      <p>As a key stakeholder in the agricultural sector, PSAE collaborates with government agencies, academic institutions, and private entities to develop policies and programs that enhance agricultural productivity and sustainability through engineering solutions.</p>
      <p>PSAE is also actively involved in international collaborations, representing the Philippines in global agricultural engineering forums and organizations.</p>
    `,
    source: "Philippine Society of Agricultural Engineers",
    sourceUrl: "https://psae.org.ph/",
    relatedLinks: [
      { title: "PSAE Membership", url: "https://psae.org.ph/membership/" },
      { title: "PSAE Annual Convention", url: "https://psae.org.ph/convention/" }
    ]
  },
  {
    id: "amtec",
    title: "Agricultural Machinery Testing and Evaluation Center (AMTEC)",
    category: "Institution",
    description: "UPLB-based center for testing and evaluating agricultural machinery in the Philippines.",
    content: `
      <p>The Agricultural Machinery Testing and Evaluation Center (AMTEC) is the premier testing facility for agricultural machinery in the Philippines, based at the University of the Philippines Los Baños (UPLB).</p>
      <p>Established to enforce the Agricultural and Fisheries Mechanization Law (AFMech Law), AMTEC conducts rigorous testing and evaluation of various agricultural machinery to ensure they meet national standards for performance, safety, and efficiency.</p>
      <p>AMTEC plays a crucial role in the modernization of Philippine agriculture by promoting the use of appropriate, efficient, and safe agricultural machinery that increases productivity while reducing post-harvest losses.</p>
      <p><strong>Contact Information:</strong></p>
      <ul>
        <li>Email: amtec.uplb@up.edu.ph</li>
        <li>Facebook: Agricultural Machinery Testing and Evaluation Center</li>
        <li>Phone: (049) 253 4956, +63 917 156 1059, +63 921 400 7137, +63 917 704 0922</li>
      </ul>
    `,
    source: "Agricultural Machinery Testing and Evaluation Center",
    sourceUrl: "https://amtec.uplb.edu.ph/",
    relatedLinks: [
      { title: "Testing Services", url: "https://amtec.uplb.edu.ph/services/" },
      { title: "AFMech Law (RA 10601)", url: "https://www.officialgazette.gov.ph/2013/06/05/republic-act-no-10601/" }
    ]
  },
  {
    id: "engineering-board",
    title: "Agricultural Engineering Board - Professional Regulation Commission",
    category: "Institution",
    description: "The regulatory body for agricultural and biosystems engineering practice in the Philippines.",
    content: `
      <p>The Agricultural Engineering Board, under the Professional Regulation Commission (PRC), is the regulatory body that oversees the practice of agricultural and biosystems engineering in the Philippines.</p>
      <p>The Board is responsible for administering licensure examinations, issuing professional licenses, monitoring and regulating professional practice, and implementing continuing professional development programs.</p>
      <p>It ensures that practitioners meet the educational and ethical requirements established by law, thereby maintaining high standards of professional practice in agricultural and biosystems engineering.</p>
      <p>The Board also collaborates with academic institutions to develop and update curricula that align with industry needs and global standards in agricultural and biosystems engineering education.</p>
    `,
    source: "Professional Regulation Commission",
    sourceUrl: "https://www.prc.gov.ph/agricultural-and-biosystems-engineers",
    relatedLinks: [
      { title: "Licensure Examination Schedule", url: "https://www.prc.gov.ph/agricultural-and-biosystems-engineers" },
      { title: "CPD Requirements", url: "https://www.prc.gov.ph/cpd" }
    ]
  }
];

/**
 * Fetch agricultural engineering information based on ID
 * @param id The unique identifier for the information
 * @returns The matching information object or undefined if not found
 */
export const getInfoById = (id: string): AgriEngineeringInfo | undefined => {
  return agriEngineeringInfo.find(info => info.id === id);
};

/**
 * Find related information based on a search term
 * @param searchTerm Term to search for in titles and descriptions
 * @returns Array of matching information objects
 */
export const findRelatedInfo = (searchTerm: string): AgriEngineeringInfo[] => {
  if (!searchTerm || searchTerm.trim().length === 0) {
    return [];
  }
  
  const normalizedTerm = searchTerm.toLowerCase();
  
  return agriEngineeringInfo.filter(info => {
    return info.title.toLowerCase().includes(normalizedTerm) || 
           info.description.toLowerCase().includes(normalizedTerm);
  });
};
