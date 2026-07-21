import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_heroes';
  info: {
    displayName: 'about_hero';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images'>;
    image_2: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutLetters extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_letters';
  info: {
    displayName: 'about_letters';
  };
  attributes: {
    gallery: Schema.Attribute.Media<'images', true>;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedAboutLicence extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_licences';
  info: {
    displayName: 'about_licence';
  };
  attributes: {
    down_text: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutOffices extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_offices';
  info: {
    displayName: 'about_offices';
  };
  attributes: {
    office_1_adres: Schema.Attribute.String;
    office_1_title: Schema.Attribute.String;
    office_2_adres: Schema.Attribute.String;
    office_2_title: Schema.Attribute.String;
    office_3_adres: Schema.Attribute.String;
    office_3_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutProgramItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_program_items';
  info: {
    displayName: 'about_program_item';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutRegulation extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_regulations';
  info: {
    displayName: 'about_regulation';
  };
  attributes: {
    regulation_items: Schema.Attribute.Component<
      'shared.regulation-item',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedAboutWhy extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_whies';
  info: {
    displayName: 'about_why';
  };
  attributes: {
    box_1_images: Schema.Attribute.Media<'images', true>;
    box_1_subtitle: Schema.Attribute.String;
    box_1_text: Schema.Attribute.Text;
    box_1_title: Schema.Attribute.String;
    box_2_subtitle: Schema.Attribute.Text;
    box_2_titlr: Schema.Attribute.String;
    box_3_text: Schema.Attribute.Text;
    box_3_title: Schema.Attribute.String;
    box_4_text: Schema.Attribute.Text;
    box_4_title: Schema.Attribute.String;
    box_5_text: Schema.Attribute.Text;
    box_5_title: Schema.Attribute.String;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedBannerV1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_v1s';
  info: {
    displayName: 'banner_v1';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedBannerV2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_v2s';
  info: {
    displayName: 'banner_v2';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0435'>;
    image: Schema.Attribute.Media<'images'>;
    texxt: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactsItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts_items';
  info: {
    displayName: 'contacts_items';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDocumentItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_document_items';
  info: {
    displayName: 'document_item';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedForWhoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_for_who_cards';
  info: {
    displayName: 'for_who_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProgramAboutSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_about_secs';
  info: {
    displayName: 'program_about_sec';
  };
  attributes: {
    about_item: Schema.Attribute.Component<'shared.about-program-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedProgramDocSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_doc_secs';
  info: {
    displayName: 'program_doc_sec';
  };
  attributes: {
    doc_file: Schema.Attribute.Media<'images' | 'files'>;
    doc_name: Schema.Attribute.String;
    doc_preview_image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedProgramRecommendedSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_recommended_secs';
  info: {
    displayName: 'program_recommended_sec';
  };
  attributes: {
    programs: Schema.Attribute.Relation<'oneToMany', 'api::program.program'>;
    section_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u0443\u0440\u0441\u044B \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E'>;
  };
}

export interface SharedProgramTrainingItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_training_items';
  info: {
    displayName: 'program_training_item';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRegulationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_regulation_items';
  info: {
    displayName: 'regulation_item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow']
    > &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<['website', 'article', 'product']> &
      Schema.Attribute.DefaultTo<'website'>;
    ogUrl: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.about-hero': SharedAboutHero;
      'shared.about-letters': SharedAboutLetters;
      'shared.about-licence': SharedAboutLicence;
      'shared.about-offices': SharedAboutOffices;
      'shared.about-program-item': SharedAboutProgramItem;
      'shared.about-regulation': SharedAboutRegulation;
      'shared.about-why': SharedAboutWhy;
      'shared.banner-v1': SharedBannerV1;
      'shared.banner-v2': SharedBannerV2;
      'shared.contacts-items': SharedContactsItems;
      'shared.document-item': SharedDocumentItem;
      'shared.for-who-card': SharedForWhoCard;
      'shared.media': SharedMedia;
      'shared.program-about-sec': SharedProgramAboutSec;
      'shared.program-doc-sec': SharedProgramDocSec;
      'shared.program-recommended-sec': SharedProgramRecommendedSec;
      'shared.program-training-item': SharedProgramTrainingItem;
      'shared.quote': SharedQuote;
      'shared.regulation-item': SharedRegulationItem;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
