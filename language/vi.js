const vi = {
    // Dashboard
    "dashboard_title": "Bảng điều khiển Tempvoice",
    "dashboard_description": "Chào mừng bạn đến với bảng điều khiển Tempvoice — quản lý và tùy chỉnh phòng thoại của bạn.",
    "dashboard_create_link": "Không gian của bạn, giọng nói của bạn. Tạo phòng tại https://discord.com/channels/{guildId}/{channelId}",
    "dashboard_footer": "Nhấn các nút bên dưới để quản lý phòng thoại.",
    "name_desc": "Đổi tên kênh thoại",
    "limit_desc": "Đặt giới hạn người dùng cho kênh",
    "privacy_desc": "Điều chỉnh quyền riêng tư của kênh",
    "dnd_desc": "Bật/Tắt chế độ Không làm phiền cho kênh",
    "region_desc": "Đổi khu vực thoại của kênh",
    "trust_desc": "Cho phép người dùng cụ thể tham gia và tương tác",
    "untrust_desc": "Gỡ quyền truy cập tin cậy của người dùng đã chọn",
    "block_desc": "Chặn người dùng xem hoặc tham gia kênh",
    "unblock_desc": "Khôi phục quyền truy cập cho người dùng bị chặn",
    "bitrate_desc": "Điều chỉnh chất lượng âm thanh của kênh",
    "invite_desc": "Mời người dùng tham gia kênh thoại",
    "kick_desc": "Đuổi người dùng khỏi kênh thoại",
    "claim_desc": "Nhận quyền sở hữu kênh nếu chủ phòng đã rời đi",
    "transfer_desc": "Chuyển quyền sở hữu kênh cho người khác",
    "delete_desc": "Xóa kênh thoại tạm thời",

    // Delete
    "deleted": "Đã xóa kênh.",
    "log_deleted": "{channel} đã bị xóa.",

    // DND
    "dnd_on": "Chế độ Không làm phiền đã bật. Người khác có thể tham gia nhưng không thể nói hoặc tương tác.",
    "dnd_off": "Chế độ Không làm phiền đã tắt. Người khác có thể nói và tương tác trong kênh của bạn.",

    // Nname
    "invalid_name": "Vui lòng nhập tên hợp lệ.",
    "channel_renamed": "Kênh đã được đổi tên thành **{name}**.",
    "log_renamed": "{user} đã đổi tên phòng thành {name}",

    // Limit
    "invalid_limit": "Giới hạn phải từ 1–99.",
    "limit_updated": "Giới hạn người dùng đã được cập nhật thành {limit}.",
    "log_limit": "{user} đã đặt giới hạn {limit} cho {channel}.",

    // Claim
    "already_owner": "Bạn đã là chủ sở hữu của kênh này.",
    "owner_still_present": "Chủ sở hữu hiện tại vẫn còn trong kênh thoại.",
    "log_claimed": "{user} đã nhận quyền sở hữu kênh thoại {channel}.",

    // Trust
    "trust_option": "Chọn người bạn tin tưởng.",
    "trust_placeholder": "Chọn người dùng để tin tưởng",
    "trusted": "Bạn đã tin tưởng {user}. Họ có thể tham gia kênh.",
    "log_trust": "{user} đã được tin tưởng trong {channel}.",

    // Untrust
    "untrust_option": "Chọn người muốn gỡ tin cậy.",
    "untrust_placeholder": "Chọn người dùng để gỡ tin cậy",
    "untrusted": "Bạn đã gỡ tin cậy {user}. Họ không thể tham gia kênh.",
    "log_untrust": "{user} đã bị gỡ tin cậy trong {channel}.",

    // Block
    "block_option": "Chọn người muốn chặn.",
    "block_placeholder": "Chọn người dùng để chặn",
    "blocked": "{user} đã bị chặn khỏi kênh này.",
    "log_block": "{user} đã bị chặn khỏi {channel}.",

    // Unblock
    "unblock_option": "Chọn người muốn bỏ chặn.",
    "unblock_placeholder": "Chọn người dùng để bỏ chặn",
    "unblocked": "{user} đã được bỏ chặn và quyền đã được đặt lại.",
    "log_unblock": "{user} đã được bỏ chặn khỏi {channel}.",

    // Transfer
    "transfer_option": "Chọn người để chuyển quyền sở hữu.",
    "transfer_placeholder": "Chọn chủ sở hữu mới cho kênh",
    "no_user_to_transfer": "Không còn ai trong kênh để chuyển quyền sở hữu.",
    "log_transfer": "{user} đã nhận quyền sở hữu {channel}.",

    // Kick
    "kick_option": "Chọn người muốn đuổi.",
    "kick_placeholder": "Chọn người dùng để đuổi",
    "user_not_found": "Không tìm thấy người dùng trong kênh.",
    "no_user_to_kick": "Không có ai để đuổi.",
    "log_kick": "{user} đã bị đuổi khỏi {channel}.",

    // Region
    "region_option": "Chọn khu vực thoại.",
    "region_placeholder": "Chọn khu vực",
    "region_updated": "Khu vực đã được cập nhật thành {region}.",
    "error_region": "Có lỗi khi cập nhật khu vực.",
    "log_region": "{user} đã đổi khu vực thành {region} trong {channel}.",

    // Bitrate
    "bitrate_option": "Chọn bitrate.",
    "bitrate_placeholder": "Chọn bitrate",
    "bitrate_updated": "Bitrate đã được đặt thành {bitrate} kbps.",
    "error_bitrate": "Có lỗi khi cập nhật bitrate.",
    "log_bitrate": "{user} đã đổi bitrate thành {bitrate} kbps trong {channel}.",

    // Invite
    "invite_option": "Chọn người muốn mời.",
    "invite_placeholder": "Mời ai đó vào kênh thoại",
    "invite_message": "Bạn đã được mời vào kênh thoại: {name}\n{voiceLink}",
    "invited_user": "{user} đã được mời.",
    "error_send_invite": "Không thể gửi lời mời cho người dùng.",
    "error_user_dms_closed": "Không thể gửi tin nhắn riêng cho người này. Có thể họ đã tắt DM hoặc là bot.",
    "log_invite": "{user} đã được mời vào {channel}.",

    // Privacy
    "privacy_option": "Đặt quyền riêng tư — công khai hoặc riêng tư.",
    "privacy_placeholder": "Chọn quyền riêng tư",
    "privacy_lock_label": "Khóa",
    "privacy_lock_desc": "Chỉ người tin cậy mới được tham gia",
    "privacy_lock": "Kênh đã được khóa. Chỉ người tin cậy mới được tham gia.",
    "privacy_unlock_label": "Mở khóa",
    "privacy_unlock_desc": "Bất kỳ ai cũng có thể tham gia kênh",
    "privacy_unlock": "Kênh đã được mở khóa. Mọi người đều có thể tham gia.",
    "privacy_invisible_label": "Ẩn",
    "privacy_invisible_desc": "Chỉ người tin cậy mới thấy kênh",
    "privacy_invisible": "Kênh đã được ẩn với người khác.",
    "privacy_visible_label": "Hiện",
    "privacy_visible_desc": "Mọi người đều thấy kênh",
    "privacy_visible": "Kênh đã được hiển thị cho mọi người.",
    "privacy_closechat_label": "Đóng chat",
    "privacy_closechat_desc": "Chỉ bạn và người tin cậy mới chat",
    "privacy_closechat": "Chat đã đóng. Chỉ bạn và người tin cậy mới chat.",
    "privacy_openchat_label": "Mở chat",
    "privacy_openchat_desc": "Mọi người đều có thể gửi tin nhắn",
    "privacy_openchat": "Chat đã mở cho mọi người.",
    "log_privacy": "{user} đã đổi quyền riêng tư thành {value} trong {channel}.",

    // Voice State Update
    "log_left": "{user} đã rời {channel}.",
    "log_joined": "{user} đã tham gia {channel}.",
    "log_switched": "{user} đã chuyển từ {from} sang {to}.",
    "log_channel_already_deleted": "{channel} đã bị xóa trước đó.",
    "log_channel_delete_failed": "Xóa {channel} thất bại.",

    // General messages
    "not_owner": "Bạn không phải chủ sở hữu của kênh này.",
    "invalid_user": "Người dùng không hợp lệ. Vui lòng thử lại.",
    "not_in_channel": "Bạn không ở trong kênh thoại.",
    "different_channel": "Bạn không thể dùng tính năng này ở kênh này.",
    "permissions_updated": "{user} đã cập nhật quyền trong {channel}.",
    "log_send_failed": "Gửi log thất bại: {error}",
    "missing_lang_key": "Thiếu khóa dịch: {key}",
    "failed_load_modal": "Không thể tải modal: {file}",
    "interaction_timeout": "Tương tác đã hết thời gian do không hoạt động.",
    "error_interaction": "Đã xảy ra lỗi. Vui lòng thử lại sau.",
    "interaction_already_active": "Đã có một tương tác đang hoạt động. Vui lòng hoàn thành trước khi bắt đầu mới.",
    "invalid_category": "CATEGORY_CHANNEL_ID không hợp lệ hoặc không phải là category.",
    "invalid_embed": "EMBED_CHANNEL_ID không hợp lệ hoặc không phải là kênh text.",
    "invalid_voice": "VOICE_CHANNEL_ID không hợp lệ hoặc không phải là kênh thoại."
}

export default vi
