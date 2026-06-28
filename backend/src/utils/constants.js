/**
 * AGRMS Fleet Management System — Constants & Enums
 * Central source of truth for all enumerated values.
 */

// ─── User Roles ──────────────────────────────────────────────
const ROLES = {
  SUPER_ADMIN: 'superadmin',
  OWNER: 'owner',
  DRIVER: 'driver',
  TRANSPORT: 'transport',
};

const ROLES_ARRAY = Object.values(ROLES);

// ─── User Account Status ─────────────────────────────────────
const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  PENDING: 'pending',
};

const USER_STATUS_ARRAY = Object.values(USER_STATUS);

// ─── Owner Approval Status ───────────────────────────────────
const OWNER_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CHANGES_REQUESTED: 'changes_requested',
};

const OWNER_STATUS_ARRAY = Object.values(OWNER_STATUS);

// ─── Trip Status ─────────────────────────────────────────────
const TRIP_STATUS = {
  PENDING: 'pending',
  STARTED: 'started',
  PAUSED: 'paused',
  BREAKDOWN: 'breakdown',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

const TRIP_STATUS_ARRAY = Object.values(TRIP_STATUS);

// ─── Truck Status ────────────────────────────────────────────
const TRUCK_STATUS = {
  RUNNING: 'running',
  IDLE: 'idle',
  OFFLINE: 'offline',
  MAINTENANCE: 'maintenance',
};

const TRUCK_STATUS_ARRAY = Object.values(TRUCK_STATUS);

// ─── Breakdown Reasons ───────────────────────────────────────
const BREAKDOWN_REASONS = {
  TYRE_BURST: 'tyre_burst',
  ENGINE_ISSUE: 'engine_issue',
  ACCIDENT: 'accident',
  TRAFFIC: 'traffic',
  OTHER: 'other',
};

const BREAKDOWN_REASONS_ARRAY = Object.values(BREAKDOWN_REASONS);

// ─── Document Types ──────────────────────────────────────────
const TRUCK_DOCUMENT_TYPES = {
  RC: 'rc',
  INSURANCE: 'insurance',
  PERMIT: 'permit',
  FITNESS: 'fitness',
  POLLUTION: 'pollution',
  ROAD_TAX: 'road_tax',
  VEHICLE_IMAGE: 'vehicle_image',
};

const TRUCK_DOCUMENT_TYPES_ARRAY = Object.values(TRUCK_DOCUMENT_TYPES);

const DRIVER_DOCUMENT_TYPES = {
  LICENSE: 'license',
  AADHAR: 'aadhar',
  PAN: 'pan',
  MEDICAL_CERTIFICATE: 'medical_certificate',
  PHOTO: 'photo',
};

const DRIVER_DOCUMENT_TYPES_ARRAY = Object.values(DRIVER_DOCUMENT_TYPES);

const TRANSPORT_DOCUMENT_TYPES = {
  GST_CERTIFICATE: 'gst_certificate',
  PAN: 'pan',
  TRADE_LICENSE: 'trade_license',
  COMPANY_REGISTRATION: 'company_registration',
  OTHER: 'other',
};

const TRANSPORT_DOCUMENT_TYPES_ARRAY = Object.values(TRANSPORT_DOCUMENT_TYPES);

const OWNER_DOCUMENT_TYPES = {
  AADHAR: 'aadhar',
  PAN: 'pan',
  GST_CERTIFICATE: 'gst_certificate',
  BUSINESS_LICENSE: 'business_license',
  ADDRESS_PROOF: 'address_proof',
  OTHER: 'other',
};

const OWNER_DOCUMENT_TYPES_ARRAY = Object.values(OWNER_DOCUMENT_TYPES);

// ─── Load Types ──────────────────────────────────────────────
const LOAD_TYPES = {
  FTL: 'ftl',
  PART_LOAD: 'part_load',
  LOCAL: 'local',
  INTER_STATE: 'inter_state',
};

const LOAD_TYPES_ARRAY = Object.values(LOAD_TYPES);

// ─── Notification Types ──────────────────────────────────────
const NOTIFICATION_TYPES = {
  OWNER_APPROVED: 'owner_approved',
  OWNER_REJECTED: 'owner_rejected',
  OWNER_CHANGES_REQUESTED: 'owner_changes_requested',
  NEW_OWNER_REGISTRATION: 'new_owner_registration',
  NEW_LOAD: 'new_load',
  LOAD_ASSIGNED: 'load_assigned',
  TRIP_STARTED: 'trip_started',
  TRIP_ENDED: 'trip_ended',
  TRIP_PAUSED: 'trip_paused',
  DRIVER_OFFLINE: 'driver_offline',
  TRUCK_IDLE: 'truck_idle',
  BREAKDOWN: 'breakdown',
  DOCUMENT_EXPIRY: 'document_expiry',
  INSURANCE_EXPIRY: 'insurance_expiry',
  PERMIT_EXPIRY: 'permit_expiry',
  LICENSE_EXPIRY: 'license_expiry',
  NEW_MESSAGE: 'new_message',
  USER_SUSPENDED: 'user_suspended',
  USER_ACTIVATED: 'user_activated',
  PASSWORD_RESET: 'password_reset',
  GENERAL: 'general',
};

const NOTIFICATION_TYPES_ARRAY = Object.values(NOTIFICATION_TYPES);

// ─── Socket.IO Events ───────────────────────────────────────
const SOCKET_EVENTS = {
  // Connection
  DRIVER_CONNECTED: 'driver:connected',
  DRIVER_DISCONNECTED: 'driver:disconnected',

  // Location
  LOCATION_UPDATE: 'location:update',
  LOCATION_UPDATED: 'location:updated',

  // Trip
  TRIP_STARTED: 'trip:started',
  TRIP_ENDED: 'trip:ended',
  TRIP_PAUSED: 'trip:paused',
  TRIP_RESUMED: 'trip:resumed',
  TRIP_BREAKDOWN: 'trip:breakdown',

  // Truck
  TRUCK_IDLE: 'truck:idle',
  TRUCK_OFFLINE: 'truck:offline',

  // Load
  NEW_LOAD: 'load:new',
  LOAD_ASSIGNED: 'load:assigned',

  // Message
  NEW_MESSAGE: 'message:new',
  MESSAGE_READ: 'message:read',

  // Notification
  NOTIFICATION: 'notification:new',
};

// ─── Report Types ────────────────────────────────────────────
const REPORT_TYPES = {
  OWNER: 'owner',
  TRUCK: 'truck',
  DRIVER: 'driver',
  TRIP: 'trip',
  LOAD: 'load',
  DIESEL: 'diesel',
  MONTHLY: 'monthly',
};

const REPORT_TYPES_ARRAY = Object.values(REPORT_TYPES);

// ─── Pagination Defaults ─────────────────────────────────────
const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
};

// ─── Idle & Offline Thresholds (milliseconds) ────────────────
const THRESHOLDS = {
  IDLE_MS: 10 * 60 * 1000,       // 10 minutes
  OFFLINE_MS: 5 * 60 * 1000,     // 5 minutes
};

// ─── Document Expiry Warning Days ────────────────────────────
const EXPIRY_WARNING_DAYS = [30, 15, 7, 1];

// ─── Upload Limits ───────────────────────────────────────────
const UPLOAD_LIMITS = {
  DOCUMENT_MAX_SIZE: 10 * 1024 * 1024,   // 10MB
  IMAGE_MAX_SIZE: 5 * 1024 * 1024,       // 5MB
  DIESEL_BILL_MAX_SIZE: 5 * 1024 * 1024, // 5MB
};

module.exports = {
  ROLES,
  ROLES_ARRAY,
  USER_STATUS,
  USER_STATUS_ARRAY,
  OWNER_STATUS,
  OWNER_STATUS_ARRAY,
  TRIP_STATUS,
  TRIP_STATUS_ARRAY,
  TRUCK_STATUS,
  TRUCK_STATUS_ARRAY,
  BREAKDOWN_REASONS,
  BREAKDOWN_REASONS_ARRAY,
  TRUCK_DOCUMENT_TYPES,
  TRUCK_DOCUMENT_TYPES_ARRAY,
  DRIVER_DOCUMENT_TYPES,
  DRIVER_DOCUMENT_TYPES_ARRAY,
  TRANSPORT_DOCUMENT_TYPES,
  TRANSPORT_DOCUMENT_TYPES_ARRAY,
  OWNER_DOCUMENT_TYPES,
  OWNER_DOCUMENT_TYPES_ARRAY,
  LOAD_TYPES,
  LOAD_TYPES_ARRAY,
  NOTIFICATION_TYPES,
  NOTIFICATION_TYPES_ARRAY,
  SOCKET_EVENTS,
  REPORT_TYPES,
  REPORT_TYPES_ARRAY,
  PAGINATION,
  THRESHOLDS,
  EXPIRY_WARNING_DAYS,
  UPLOAD_LIMITS,
};
