/**
 * Tapestry API TypeScript Definitions
 */

/**
 * Sends an HTTP request.
 * @param url The endpoint URL (assumed to be properly encoded).
 * @param method The HTTP method (default is "GET").
 * @param parameters For "POST" or "PUT" requests (e.g. "foo=1&bar=something").
 * @param extraHeaders An object with additional header key/value pairs.
 * @returns A Promise resolving with a string (response body) or, for "HEAD" requests, a JSON dictionary of headers.
 */
declare function sendRequest(
  url: string, 
  method?: string, 
  parameters?: string, 
  extraHeaders?: { [key: string]: string }
): Promise<string>;

/**
 * Determines if a site is reachable and gathers feed properties.
 * Calls processVerification on success or processError on failure.
 */
declare function verify(): void;

/**
 * Loads any new data and return it to the app with processResults or processError.
 * Variables can be used to determine what to load. For example, whether to include mentions on Mastodon or not.
 */
declare function load(): void;

/**
 * Sends retrieved data to Tapestry for display.
 * @param results An array of Item objects.
 * @param isComplete Boolean flag indicating if result collection is complete (default is true).
 */
declare function processResults(results: Item[], isComplete?: boolean): void;

/**
 * Sends an error to Tapestry for display.
 * @param error The Error object describing the issue.
 */
declare function processError(error: Error): void;

/**
 * Sets site and service parameters based on verification.
 * @param verification The verification object or string
 */
declare function processVerification(verification: object | string): void;

/**
 * Parses XML text into a JavaScript object.
 * Attributes are stored in a sibling property named $attrs.
 * Handles repeated nodes by creating arrays.
 * @param text XML text to parse
 * @returns Parsed JavaScript object
 */
declare function xmlParse(text: string): object;

/**
 * Parses a property list (plist) in XML format into an object.
 * @param text XML plist text to parse
 * @returns Parsed JavaScript object
 */
declare function plistParse(text: string): object;

/**
 * Extracts metadata from HTML content (e.g., Open Graph properties) into an object.
 * @param text HTML content to extract properties from
 * @returns Object containing extracted properties
 */
declare function extractProperties(text: string): object;

/**
 * Fetches an icon URL from the provided HTML page URL.
 * @param url URL of the HTML page
 * @returns Promise resolving with the icon URL or null if not found
 */
declare function lookupIcon(url: string): Promise<string | null>;

/**
 * Stores a string in local storage under the specified key.
 * Passing null as the value removes the item.
 * @param key Storage key
 * @param value String value to store
 */
declare function setItem(key: string, value: string | null): void;

/**
 * Retrieves a string from local storage by key.
 * @param key Storage key
 * @returns Stored string or null if key not found
 */
declare function getItem(key: string): string | null;

/**
 * Clears all entries from local storage.
 */
declare function clearItems(): void;

/**
 * Represents the size aspect of media.
 */
interface AspectSize {
  width: number;
  height: number;
}

/**
 * Represents a focal point for media.
 */
interface FocalPoint {
  x: number;
  y: number;
}

/**
 * Represents the creator of an Item.
 */
declare class Identity {
  /**
   * Creates an Identity object using the given name.
   * @param name The creator's name
   * @returns A new Identity instance
   */
  static createWithName(name: string): Identity;
  
  /** The creator's name (required) */
  name: string;
  
  /** The creator's username */
  username?: string;
  
  /** Unique URI for the creator */
  uri?: string;
  
  /** URL for the creator's avatar */
  avatar?: string;
}

/**
 * Represents an annotation (e.g. boost, reply) for an Item.
 */
declare class Annotation {
  /**
   * Creates an Annotation with the provided text.
   * @param text The annotation text
   * @returns A new Annotation instance
   */
  static createWithText(text: string): Annotation;
  
  /** Annotation text (required) */
  text: string;
  
  /** URL for the annotation icon */
  icon?: string;
  
  /** URI for more information */
  uri?: string;
}

/**
 * Represents a media attachment for an Item.
 */
declare class MediaAttachment {
  /**
   * Creates a MediaAttachment with the specified URL.
   * @param url Media URL
   * @returns A new MediaAttachment instance
   */
  static createWithUrl(url: string): MediaAttachment;
  
  /** Media URL (required) */
  url: string;
  
  /** Optional lower resolution copy URL */
  thumbnail?: string;
  
  /** Type of media (e.g. image, video, audio) */
  mimeType?: string;
  
  /** Placeholder image hash */
  blurhash?: string;
  
  /** Description of media (for accessibility) */
  text?: string;
  
  /** Object with width and height */
  aspectSize?: AspectSize;
  
  /** Object with x and y coordinates */
  focalPoint?: FocalPoint;
}

/**
 * Represents a link attachment for an Item.
 */
declare class LinkAttachment {
  /**
   * Creates a LinkAttachment with the specified URL.
   * @param url Link URL
   * @returns A new LinkAttachment instance
   */
  static createWithUrl(url: string): LinkAttachment;
  
  /** Link URL (required) */
  url: string;
  
  /** Type of link (typically og:type) */
  type?: string;
  
  /** Title of the link */
  title?: string;
  
  /** Description of the link */
  subtitle?: string;
  
  /** Site name */
  siteName?: string;
  
  /** Author name */
  authorName?: string;
  
  /** Author profile URL */
  authorProfile?: string;
  
  /** Image URL for the link */
  image?: string;
  
  /** Placeholder image hash */
  blurhash?: string;
  
  /** Object with width and height */
  aspectSize?: AspectSize;
}

/**
 * Represents a timeline entry.
 */
declare class Item {
  /**
   * Creates an Item object with a unique URI and a creation date.
   * @param uri Unique URL for the item
   * @param date Creation date/time
   * @returns A new Item instance
   */
  static createWithUriDate(uri: string, date: Date): Item;
  
  /** Unique URL for the item (required) */
  uri: string;
  
  /** Creation date/time (required) */
  date: Date;
  
  /** Title of the item */
  title?: string;
  
  /** Body content with HTML */
  body?: string;
  
  /** Optional content warning */
  contentWarning?: string;
  
  /** Identity representing the creator */
  author?: Identity;
  
  /** Array of media or link attachments */
  attachments?: Array<MediaAttachment | LinkAttachment>;
  
  /** Dictionary mapping shortcode names to image URLs */
  shortcodes?: { [key: string]: string };
}
